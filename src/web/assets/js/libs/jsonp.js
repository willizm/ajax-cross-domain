var http = http || {};
(function () {
    var callbackId = 0;
    var jsonp = function (options) {
        if (!options || !options.url) {
            return false;
        }
        var url, callback, jsonpScript;
        url = options.url;
        callback = 'jsonp'+ callbackId++;
        success = options.success;

        jsonpScript = document.createElement('script');
        jsonpScript.setAttribute('src', url + '?callback=' + callback);
        document.body.appendChild(jsonpScript);

        window[callback] = function (data) {
            success(data);
        };
    };
    http.jsonp = jsonp;
}());
