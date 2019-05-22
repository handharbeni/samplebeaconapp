package com.sampleapps;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.mhandharbeni.benibeacon.RNBenibeaconModule;
import com.mhandharbeni.benibeacon.RNBenibeaconPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SampleApps";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        RNBenibeaconModule.checkPermissions(MainActivity.this, getApplicationContext());
    }
}
