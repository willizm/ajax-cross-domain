/**
 * Created by w2ex on 5/14/16.
 */
var http = http || {};
(function () {
    var _noop = function () {
        // placeholder function
        // do nothing
    };
    var _param = function (data) {
        var paramArr = [];
        _.forEach(data, function (val, key) {
            paramArr.push(key + '=' + val);
        });
        return paramArr.join('&');
    };
    var _toJSON = function (val) {
        if (_.isObject(val)) {
            return JSON.stringify(val);
        }
        return val;
    };

    var request = function (options) {
        if (!options || !options.url) {
            return false;
        }
        var defaults = {
            method: 'GET',
            dataType: 'json',
            async: true,
            data: null,
            success: _noop
        };

        var opts = _.extend(defaults, options);
        var xhr = new XMLHttpRequest();
        xhr.responseType = opts.dataType;
        xhr.open(opts.method, opts.url, opts.async);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
                opts.success(opts.dataType === 'json' ? xhr.response : xhr.responseText);
            }
        };

        xhr.send(opts.data);
    };

    var get = function (url, params, success) {
        var options = {
            url: url + '?' + _param(params),
            success: success
        };
        request(options);
    };

    var post = function (url, data, success) {
        var formdata = new FormData();
        _.forEach(data, function (val, key) {
            formdata.append(key, _toJSON(val));
        });
        var options = {
            url: url,
            data: formdata,
            success: success
        };
        request(options);
    };

    http.get = get;
    http.post = post;
}());
