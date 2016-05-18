var dom = dom || {};
(function(){
    var ready = function (then) {
        document.addEventListener('readystatechange', function () {
            if (document.readyState === 'complete') {
                then.call(window);
            }
        })
    };
    dom.ready = ready;
}());