//字体自适应
(function () {
    var reSize = debounce(function () {
        var deviceWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;
        document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    }, 50);
    reSize();
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            reSize()
        }
    })
    window.onresize = reSize;
})();
function debounce(fun, delay) {
    return function (args) {
        var that = this
        var _args = args
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun.call(that, _args)
        }, delay)
    }
}
// 显示隐藏弹窗
function showPop(id) {
    $(id).show();
}
function closePop(id) {
    $(id).hide();
}