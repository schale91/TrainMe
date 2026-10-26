package io.github.schale91.trainme;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Eigene Erweiterung: Pausentimer, der auch im Hintergrund und über anderen Apps läuft
        registerPlugin(PausenTimerPlugin.class);
        // Koppeln mit der Lebenswelt über den Link trainme://koppeln
        registerPlugin(KopplungPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
