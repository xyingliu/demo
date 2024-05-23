function gethtmlfontsize() {
    // 获取html的宽,
    let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;

    let htmlDom = document.getElementsByTagName("html")[0]
    //设置根元素样式
    htmlDom.style.fontSize = htmlwidth / 20 + 'px';
}

gethtmlfontsize();
// 添加监听事件
window.addEventListener('resize', gethtmlfontsize)