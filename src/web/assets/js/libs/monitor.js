var monitor = monitor || {};
(function () {
    var $screen, $logs, $button;
    var NODE_ID = 'monitor';
    var _mount = function () {
        $screen = document.getElementById(NODE_ID);
        if (!$screen) {
            var $node = document.createElement('div');
            $logs = document.createElement('ul');
            $button = document.createElement('button');

            $node.id = 'monitor';
            $node.className = 'monitor-wrapper';
            document.body.appendChild($node);
            $screen = document.getElementById(NODE_ID);

            $screen.appendChild($logs);
            $screen.appendChild($button);

            $logs.id = 'monitor-logs';

            $button.innerText = '清除';
            $button.id = 'btn-clear-logs';

            $button.addEventListener('click', function () {
                clear();
            });
        }
    };
    var _appendLog = function (logStr) {
        var $logNode = document.createElement('li');
        $logNode.innerHTML = logStr;
        $logNode.className = 'log-item';
        $logs.appendChild($logNode);
    };

    var log = function (data) {
        var logStr = '';
        if (_.isNull(data)) {
            logStr += 'null';
        } else if (_.isUndefined(data)) {
            logStr += 'undefined';
        } else if (_.isArray(data)) {
            logStr += 'array';
        } else if (_.isObject(data)) {
            logStr += 'object';
        }

        logStr += '<br>';

        if (!_.isNull(data) && !_.isUndefined(data)) {
            logStr += '<code>';
            if (_.isObject(data) && !_.isFunction(data)) {
                logStr += JSON.stringify(data);
            } else {
                logStr += data.toString();
            }
            logStr += '</code>';
        }

        _appendLog(logStr);
    };

    var clear = function () {
        $logs.innerHTML = '';
    };

    _mount();

    monitor.log = log;
    monitor.clear = clear;
}());
