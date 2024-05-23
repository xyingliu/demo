$(window).scroll(function () {

    var scroll = $(document).scrollTop();  //滚动条滚动的动态高度
    console.log(scroll);
    if (scroll >= 500) {
        //隐藏到-132px后
        $(".btn").addClass('btnact')
    } else if (scroll < 500) {
        //显示出来
        $(".btn").removeClass('btnact')
    }


});