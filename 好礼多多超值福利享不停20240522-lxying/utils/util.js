//字体自适应
// (function() {
//   var reSize = debounce(function() {
//       var deviceWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;
//       document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
//   }, 50);
//   reSize();
//   window.addEventListener('pageshow', function (e) {
//     if (e.persisted) {
//       reSize()
//     }
//   })
//   window.onresize = reSize;
// })();

// function debounce(fun, delay) {
//     return function (args) {
//         var that = this
//         var _args = args
//         clearTimeout(fun.id)
//         fun.id = setTimeout(function () {
//             fun.call(that, _args)
//         }, delay)
//     }
// }

$(function () {
    // 解决ios下:active无效的情况
    document.body.addEventListener('touchstart', function () {});

    androidInputBugFix();

})

// 解决输入遮挡
function androidInputBugFix() {
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                window.setTimeout(function () {
                    document.activeElement.scrollIntoViewIfNeeded();
                }, 0);
            }
        })
    }
}

// 显示提示
function showToast(msg, time, type) {
    var time = time || 2000;
    var $toast = $('<div class="toast ' + type + '" id="toast">' + msg + '</div>');
    $('body').append($toast);
    setTimeout(function () {
        $toast.addClass('fade-out');
        setTimeout(function () {
            $toast.remove();
        }, time)
    }, time);
}

// 显示隐藏弹窗
function showPop(id, Isstop = false) {
    $(id).show();
    if (Isstop) {
        stop()
    }
}

function closePop(id, Isstop = false) {
    $(id).hide();
    if (Isstop) {
        move()
    }
}

//禁止页面滑动
function stop() {
    var mo = function (e) {
        e.preventDefault();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener("touchmove", mo, false);
}

/***取消滑动限制***/
function move() {
    var mo = function (e) {
        e.preventDefault();
    };
    document.body.style.overflow = ''; //出现滚动条
    document.removeEventListener("touchmove", mo, false);
}

// 发布订阅
class Event {
    constructor() {
        //创建一个对象 在该对象上创建一个缓存列表（调度中心）
        this.list = {}
    }
    on(event, fn) {

        //on 方法用来把函数 fn 都加到缓存列表中（订阅者注册事件到调度中心）
        (this.list[event] || (this.list[event] = [])).push(fn)
        return this;
    }
    emit() {
        //emit 方法取到 arguments 里第一个当做 event，
        //根据 event 值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
        let event = [].shift.call(arguments);
        if (this.list[event]) {
            this.list[event].forEach(events => {

                events.apply(this, arguments)
            });
        } else {
            throw 'There is no such event'
            return;
        }
    }
    off(event, fn) {
        //off 方法可以根据 event 值取消订阅（取消订阅）
        if (!this.list[event]) return false;
        if (!fn) {
            this.list[event] && (this.list[event].length = 0);
        } else {
            let index = this.list[event].findIndex(v => v === fn)
            this.list[event].splice(index, 1)
        }
    }
}

// 修改文案  可以class 和id 需要带.或者#
function xiugiatext(name, text) {
    $(name).text(text)
}

// 数组分组
function groupBy(array, f) {
    const groups = {};
    array.forEach(function (o) { //注意这里必须是forEach 大写
        const group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });


    return Object.keys(groups).map(function (group) {
        return {
            id: JSON.parse(group)[0],
            groups: groups[group]
        }
    }).sort((a, b) => a.id.localeCompare(b.id));
}
// 滚动到元素位置
const smoothScroll = element => {

    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });

    // document.documentElement.scroll({
    //     top: $(element).offset().top -60, // 60 是头部导航栏的高度
    //     left: 0,
    //     behavior: 'smooth' //滚动条平滑滚动
    //   });
};
//滚动标签栏
function BQScroll(name, dom) {
    var index = $(dom).index();
    var liW = $(dom).width();
    console.log(index * liW)
    $(name).stop().animate({
        scrollLeft: index * liW
    }, 300);
}

function arrange(parent) { //返回一个二维数组，表达元素的换行信息
    let rowW = $(parent)[0].clientWidth
    let children = $(parent).children()
    let arranged = [];
    let row = [];
    let width = 0;
    for (let i = 0; i < children.length; i++) {
        if (width + children[i].clientWidth <= rowW) {
            width = width + children[i].clientWidth
            row.push(children[i])
        } else {
            arranged.push(row);
            row = [children[i]];
            width = children[i].clientWidth;
        }
        if (i === children.length - 1) {
            arranged.push(row);
        }
    }
    return arranged;
}

function template(str, obj) {
    for (var key in obj) {
        var reg = new RegExp("{{" + key + "}}", 'g')
        // var msg = new RegExp(`value=""`, 'g')
        // str =str.replace(msg, `value="{{${key}}}"`)
        str = str.replace(reg, obj[key])
    }
    return str
}