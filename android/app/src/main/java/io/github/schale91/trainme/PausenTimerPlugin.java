package io.github.schale91.trainme;

import android.Manifest;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.view.WindowManager;
import androidx.core.content.ContextCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.PermissionState;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.annotation.PermissionCallback;

/**
 * Schnittstelle zur Web-App: start(ende, titel), stop(), Berechtigungen für Benachrichtigung und
 * Anzeige über anderen Apps, wachHalten(an) für den Bildschirm während einer Einheit.
 */
@CapacitorPlugin(
    name = "PausenTimer",
    permissions = { @Permission(alias = "benachrichtigung", strings = { Manifest.permission.POST_NOTIFICATIONS }) }
)
public class PausenTimerPlugin extends Plugin {

    @PluginMethod
    public void start(PluginCall call) {
        Double ende = call.getDouble("ende");
        if (ende == null) {
            call.reject("ende fehlt");
            return;
        }
        Intent i = new Intent(getContext(), PausenTimerService.class);
        i.setAction(PausenTimerService.START);
        i.putExtra("ende", ende.longValue());
        i.putExtra("titel", call.getString("titel", "Pause"));
        i.putExtra("text", call.getString("text", ""));
        ContextCompat.startForegroundService(getContext(), i);
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        Intent i = new Intent(getContext(), PausenTimerService.class);
        i.setAction(PausenTimerService.STOP);
        getContext().startService(i);
        call.resolve();
    }

    @PluginMethod
    public void wachHalten(PluginCall call) {
        boolean an = Boolean.TRUE.equals(call.getBoolean("an", true));
        getActivity().runOnUiThread(() -> {
            if (an) getActivity().getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            else getActivity().getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            call.resolve();
        });
    }

    @PluginMethod
    public void status(PluginCall call) {
        JSObject r = new JSObject();
        r.put("overlay", Build.VERSION.SDK_INT < 23 || Settings.canDrawOverlays(getContext()));
        r.put("benachrichtigung", Build.VERSION.SDK_INT < 33 || getPermissionState("benachrichtigung") == PermissionState.GRANTED);
        call.resolve(r);
    }

    @PluginMethod
    public void overlayErlauben(PluginCall call) {
        if (Build.VERSION.SDK_INT >= 23 && !Settings.canDrawOverlays(getContext())) {
            Intent i = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION, Uri.parse("package:" + getContext().getPackageName()));
            i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getContext().startActivity(i);
        }
        call.resolve();
    }

    @PluginMethod
    public void benachrichtigungErlauben(PluginCall call) {
        if (Build.VERSION.SDK_INT >= 33 && getPermissionState("benachrichtigung") != PermissionState.GRANTED) {
            requestPermissionForAlias("benachrichtigung", call, "nachBerechtigung");
        } else {
            call.resolve();
        }
    }

    @PermissionCallback
    private void nachBerechtigung(PluginCall call) {
        call.resolve();
    }
}
