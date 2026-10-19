package io.github.schale91.trainme;

import android.annotation.SuppressLint;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ServiceInfo;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.graphics.drawable.GradientDrawable;
import android.media.AudioAttributes;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.provider.Settings;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.core.app.NotificationCompat;
import androidx.core.app.ServiceCompat;
import java.util.Locale;

/**
 * Pausentimer als Vordergrunddienst. Zeigt die Restzeit in der Benachrichtigung (auch auf dem Sperrbildschirm)
 * und, wenn erlaubt, als verschiebbare Anzeige über allen anderen Apps. Am Ende: Ton, Vibration, Hinweis.
 */
public class PausenTimerService extends Service {
    static final String START = "start";
    static final String STOP = "stop";
    private static final String KANAL_LAUF = "pause_lauf";
    private static final String KANAL_ENDE = "pause_ende";
    private static final int ID_LAUF = 41;
    private static final int ID_ENDE = 42;

    private final Handler handler = new Handler(Looper.getMainLooper());
    private long ende;
    private String titel = "Pause";
    private String text = "";
    private WindowManager fenster;
    private LinearLayout blase;
    private TextView zeitAnzeige;
    private TextView titelAnzeige;
    private boolean fertig;

    private final Runnable takt = new Runnable() {
        @Override
        public void run() {
            long rest = ende - System.currentTimeMillis();
            if (rest <= 0) {
                beenden();
                return;
            }
            if (zeitAnzeige != null) zeitAnzeige.setText(format(rest));
            handler.postDelayed(this, 250);
        }
    };

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        kanaele();
        if (intent == null || STOP.equals(intent.getAction())) {
            aufraeumen();
            stopSelf();
            return START_NOT_STICKY;
        }
        ende = intent.getLongExtra("ende", System.currentTimeMillis() + 90000);
        titel = intent.getStringExtra("titel") != null ? intent.getStringExtra("titel") : "Pause";
        text = intent.getStringExtra("text") != null ? intent.getStringExtra("text") : "";
        fertig = false;
        Notification n = laufNotification();
        int typ = Build.VERSION.SDK_INT >= 34 ? ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE : 0;
        ServiceCompat.startForeground(this, ID_LAUF, n, typ);
        NotificationManager nm = getSystemService(NotificationManager.class);
        nm.cancel(ID_ENDE);
        zeigeBlase();
        handler.removeCallbacks(takt);
        handler.post(takt);
        return START_NOT_STICKY;
    }

    @Override
    public void onDestroy() {
        aufraeumen();
        super.onDestroy();
    }

    private void aufraeumen() {
        handler.removeCallbacksAndMessages(null);
        entferneBlase();
        ServiceCompat.stopForeground(this, ServiceCompat.STOP_FOREGROUND_REMOVE);
    }

    private static String format(long ms) {
        long s = (ms + 999) / 1000;
        return String.format(Locale.GERMANY, "%d:%02d", s / 60, s % 60);
    }

    private PendingIntent oeffneApp() {
        Intent i = new Intent(this, MainActivity.class);
        i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        return PendingIntent.getActivity(this, 0, i, PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT);
    }

    private void kanaele() {
        if (Build.VERSION.SDK_INT < 26) return;
        NotificationManager nm = getSystemService(NotificationManager.class);
        NotificationChannel lauf = new NotificationChannel(KANAL_LAUF, "Pausentimer", NotificationManager.IMPORTANCE_LOW);
        lauf.setDescription("Restzeit der Satzpause");
        lauf.setShowBadge(false);
        lauf.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
        nm.createNotificationChannel(lauf);
        NotificationChannel endeKanal = new NotificationChannel(KANAL_ENDE, "Pause vorbei", NotificationManager.IMPORTANCE_HIGH);
        endeKanal.setDescription("Meldung, wenn der nächste Satz ansteht");
        endeKanal.enableVibration(true);
        endeKanal.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
        nm.createNotificationChannel(endeKanal);
    }

    private Notification laufNotification() {
        return new NotificationCompat.Builder(this, KANAL_LAUF)
            .setSmallIcon(R.drawable.ic_timer)
            .setContentTitle(titel)
            .setContentText(text.isEmpty() ? "Nächster Satz gleich" : text)
            .setWhen(ende)
            .setShowWhen(true)
            .setUsesChronometer(true)
            .setChronometerCountDown(true)
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .setSilent(true)
            .setCategory(NotificationCompat.CATEGORY_STOPWATCH)
            .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
            .setColor(Color.parseColor("#7C6CFF"))
            .setContentIntent(oeffneApp())
            .build();
    }

    private void beenden() {
        if (fertig) return;
        fertig = true;
        vibrieren();
        try {
            Ringtone r = RingtoneManager.getRingtone(this, RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION));
            if (r != null) {
                if (Build.VERSION.SDK_INT >= 21) r.setAudioAttributes(new AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ALARM).build());
                r.play();
            }
        } catch (Exception ignored) {
            // ohne Ton
        }
        Notification n = new NotificationCompat.Builder(this, KANAL_ENDE)
            .setSmallIcon(R.drawable.ic_timer)
            .setContentTitle("Pause vorbei")
            .setContentText(text.isEmpty() ? "Weiter mit dem nächsten Satz" : text)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setCategory(NotificationCompat.CATEGORY_ALARM)
            .setAutoCancel(true)
            .setTimeoutAfter(60000)
            .setColor(Color.parseColor("#5EE6C4"))
            .setContentIntent(oeffneApp())
            .build();
        try {
            getSystemService(NotificationManager.class).notify(ID_ENDE, n);
        } catch (SecurityException ignored) {
            // Benachrichtigungen nicht erlaubt
        }
        if (zeitAnzeige != null && blase != null) {
            zeitAnzeige.setText("Los!");
            titelAnzeige.setText("Nächster Satz");
            ((GradientDrawable) blase.getBackground()).setColor(Color.parseColor("#1F9E83"));
        }
        handler.postDelayed(() -> {
            aufraeumen();
            stopSelf();
        }, 4000);
    }

    private void vibrieren() {
        Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
        if (v == null || !v.hasVibrator()) return;
        long[] muster = { 0, 300, 150, 300, 150, 500 };
        if (Build.VERSION.SDK_INT >= 26) v.vibrate(VibrationEffect.createWaveform(muster, -1));
        else v.vibrate(muster, -1);
    }

    private int dp(float x) {
        return (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, x, getResources().getDisplayMetrics());
    }

    @SuppressLint("ClickableViewAccessibility")
    private void zeigeBlase() {
        if (Build.VERSION.SDK_INT >= 23 && !Settings.canDrawOverlays(this)) return;
        if (blase != null) {
            titelAnzeige.setText(titel);
            ((GradientDrawable) blase.getBackground()).setColor(Color.parseColor("#EE2D2470"));
            return;
        }
        fenster = (WindowManager) getSystemService(WINDOW_SERVICE);
        blase = new LinearLayout(this);
        blase.setOrientation(LinearLayout.VERTICAL);
        blase.setGravity(Gravity.CENTER);
        blase.setPadding(dp(16), dp(8), dp(16), dp(8));
        GradientDrawable hg = new GradientDrawable();
        hg.setCornerRadius(dp(22));
        hg.setColor(Color.parseColor("#EE2D2470"));
        hg.setStroke(dp(2), Color.parseColor("#7C6CFF"));
        blase.setBackground(hg);
        blase.setElevation(dp(8));

        titelAnzeige = new TextView(this);
        titelAnzeige.setText(titel);
        titelAnzeige.setTextColor(Color.parseColor("#C9C4F2"));
        titelAnzeige.setTextSize(TypedValue.COMPLEX_UNIT_SP, 12);
        titelAnzeige.setMaxLines(1);
        zeitAnzeige = new TextView(this);
        zeitAnzeige.setTextColor(Color.WHITE);
        zeitAnzeige.setTextSize(TypedValue.COMPLEX_UNIT_SP, 30);
        zeitAnzeige.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        zeitAnzeige.setText(format(ende - System.currentTimeMillis()));
        blase.addView(titelAnzeige);
        blase.addView(zeitAnzeige);

        int typ = Build.VERSION.SDK_INT >= 26 ? WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY : WindowManager.LayoutParams.TYPE_PHONE;
        final WindowManager.LayoutParams lp = new WindowManager.LayoutParams(
            WindowManager.LayoutParams.WRAP_CONTENT,
            WindowManager.LayoutParams.WRAP_CONTENT,
            typ,
            WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE | WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS,
            PixelFormat.TRANSLUCENT
        );
        lp.gravity = Gravity.TOP | Gravity.END;
        lp.x = dp(12);
        lp.y = dp(96);

        // Verschieben mit dem Finger, kurzes Tippen öffnet TrainMe
        blase.setOnTouchListener(new View.OnTouchListener() {
            float startX, startY;
            int lpX, lpY;
            boolean bewegt;

            @Override
            public boolean onTouch(View v, MotionEvent e) {
                switch (e.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        startX = e.getRawX();
                        startY = e.getRawY();
                        lpX = lp.x;
                        lpY = lp.y;
                        bewegt = false;
                        return true;
                    case MotionEvent.ACTION_MOVE:
                        float dx = e.getRawX() - startX, dy = e.getRawY() - startY;
                        if (Math.abs(dx) + Math.abs(dy) > dp(6)) bewegt = true;
                        lp.x = lpX - (int) dx;
                        lp.y = lpY + (int) dy;
                        if (blase != null) fenster.updateViewLayout(blase, lp);
                        return true;
                    case MotionEvent.ACTION_UP:
                        if (!bewegt) {
                            try {
                                oeffneApp().send();
                            } catch (PendingIntent.CanceledException ignored) {
                                // App lässt sich gerade nicht öffnen
                            }
                        }
                        return true;
                    default:
                        return false;
                }
            }
        });
        try {
            fenster.addView(blase, lp);
        } catch (Exception e) {
            blase = null;
        }
    }

    private void entferneBlase() {
        if (blase != null && fenster != null) {
            try {
                fenster.removeView(blase);
            } catch (Exception ignored) {
                // schon weg
            }
        }
        blase = null;
        zeitAnzeige = null;
        titelAnzeige = null;
    }
}
