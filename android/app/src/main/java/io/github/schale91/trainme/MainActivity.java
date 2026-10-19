package io.github.schale91.trainme;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Eigene Erweiterung: Pausentimer, der auch im Hintergrund und über anderen Apps läuft
        registerPlugin(PausenTimerPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
