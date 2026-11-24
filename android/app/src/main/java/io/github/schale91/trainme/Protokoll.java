package io.github.schale91.trainme;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.provider.Settings;
import java.security.SecureRandom;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Technisches Protokoll des Android-Teils (Pausentimer-Dienst). Schreibt auch, wenn die Web-App im Hintergrund schläft;
 * die App holt die Einträge beim nächsten Öffnen ab (PausenTimerPlugin.protokoll) und schickt sie mit ihren eigenen an
 * die Lebenswelt. Nur Technik, keine Inhalte. Format wie in der App: {i, z, a, t, d}.
 */
final class Protokoll {
    private static final String DATEI = "trainme_protokoll";
    private static final String SCHLUESSEL = "eintraege";
    private static final int MAX = 200;
    private static final String ZEICHEN = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private static final SecureRandom ZUFALL = new SecureRandom();

    private Protokoll() {}

    private static String kennung() {
        StringBuilder b = new StringBuilder(12);
        for (int k = 0; k < 12; k++) b.append(ZEICHEN.charAt(ZUFALL.nextInt(ZEICHEN.length())));
        return b.toString();
    }

    /** Gerät und Erlaubnisse, die für die Anzeige über anderen Apps zählen */
    static JSONObject geraet(Context c) {
        JSONObject d = new JSONObject();
        try {
            d.put("sdk", Build.VERSION.SDK_INT);
            d.put("hersteller", Build.MANUFACTURER);
            d.put("modell", Build.MODEL);
            d.put("ueber_apps", Build.VERSION.SDK_INT < 23 || Settings.canDrawOverlays(c));
        } catch (Exception ignored) {
            // ohne Gerätedaten
        }
        return d;
    }

    static synchronized void schreibe(Context c, String art, String text, JSONObject d) {
        try {
            SharedPreferences p = c.getSharedPreferences(DATEI, Context.MODE_PRIVATE);
            JSONArray a = new JSONArray(p.getString(SCHLUESSEL, "[]"));
            JSONObject e = new JSONObject();
            e.put("i", kennung());
            e.put("z", System.currentTimeMillis());
            e.put("a", art);
            e.put("t", text.length() > 300 ? text.substring(0, 300) : text);
            if (d != null) e.put("d", d);
            a.put(e);
            JSONArray rest = new JSONArray();
            for (int k = Math.max(0, a.length() - MAX); k < a.length(); k++) rest.put(a.get(k));
            p.edit().putString(SCHLUESSEL, rest.toString()).commit();
        } catch (Exception ignored) {
            // Protokoll darf den Timer nie stören
        }
    }

    /** Alle Einträge holen und den Speicher leeren */
    static synchronized JSONArray holen(Context c) {
        try {
            SharedPreferences p = c.getSharedPreferences(DATEI, Context.MODE_PRIVATE);
            JSONArray a = new JSONArray(p.getString(SCHLUESSEL, "[]"));
            p.edit().remove(SCHLUESSEL).commit();
            return a;
        } catch (Exception e) {
            return new JSONArray();
        }
    }

    /** Kennzahlen bequem bauen: kv("rest_s", 12, "blase", true) */
    static JSONObject kv(Object... paare) {
        JSONObject d = new JSONObject();
        try {
            for (int k = 0; k + 1 < paare.length; k += 2) d.put(String.valueOf(paare[k]), paare[k + 1]);
        } catch (Exception ignored) {
            // ohne Kennzahlen
        }
        return d;
    }
}
