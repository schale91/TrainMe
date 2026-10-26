package io.github.schale91.trainme;

import android.content.Intent;
import android.net.Uri;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * Link zum Koppeln mit der Lebenswelt (trainme://koppeln?a=Adresse&c=Code), etwa aus dem QR-Code, den die
 * Kamera-App öffnet. Die Web-App fragt beim Start nach dem Link (link()) und hört auf neue ("link").
 */
@CapacitorPlugin(name = "Kopplung")
public class KopplungPlugin extends Plugin {

    private String offen = null;

    @Override
    public void load() {
        merke(getActivity().getIntent());
    }

    @Override
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);
        if (merke(intent)) {
            JSObject r = new JSObject();
            r.put("url", offen);
            notifyListeners("link", r, true);
        }
    }

    private boolean merke(Intent intent) {
        Uri u = intent == null ? null : intent.getData();
        if (u == null || !"trainme".equals(u.getScheme())) return false;
        offen = u.toString();
        return true;
    }

    @PluginMethod
    public void link(PluginCall call) {
        JSObject r = new JSObject();
        r.put("url", offen);
        offen = null;
        call.resolve(r);
    }
}
