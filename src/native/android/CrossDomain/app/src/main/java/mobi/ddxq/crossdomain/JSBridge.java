package mobi.ddxq.crossdomain;

import android.content.Context;
import android.webkit.JavascriptInterface;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by w2ex on 5/19/16.
 */
public class JSBridge {
    Context mContext;

    JSBridge (Context c) {
        mContext = c;
    }

    @JavascriptInterface
    public Void getJSON(String urlString, String params, String callback) {
        return null;
    }
}
