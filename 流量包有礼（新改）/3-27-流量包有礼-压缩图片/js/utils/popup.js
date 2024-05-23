

/**
 * 
 * @param {Object} data 
 * title :string 提示内容  必填   duration:number提示的延迟时间 默认1500秒  否必填   mask:boolean 是否显示透明蒙层，防止触摸穿透	默认不显示
 * success:function  成功回调  fail失败回调   complete 成功和失败都会执行
 * 
 */
function showToast(data) {
    let { title = '', duration = 1500, mask = false, success = () => { }, fail = () => { }, complete = () => { } } = data
    let popuptime;
    $('.popupBox').remove()
    $('body').append(`
        <div class="popupBox"> 
            <div class="popupToast">
                ${title}
            </div>
        </div>
    `)
    if (mask) {
        $('.popupBox').append(`
        <div class="popupMask"></div>
        `)
        stop()
    }
    clearTimeout(popuptime)
    popuptime = setTimeout(() => {
        try {
            if(mask)move();
            $('.popupBox').remove()
            success(true)
        } catch (err) {
            fail(err)
        }
        complete('我执行了')
    }, duration)
}
//禁止页面滑动
function stop() {
    var mo = function (e) { e.preventDefault(); };
    document.body.style.overflow = 'hidden';
    document.addEventListener("touchmove", mo, false);
}

/***取消滑动限制***/
function move() {
    var mo = function (e) { e.preventDefault(); };
    document.body.style.overflow = '';//出现滚动条
    document.removeEventListener("touchmove", mo, false);
}