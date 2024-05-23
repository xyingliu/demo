
$(function() {
  // 阅读同意
  $(".sbtn").attr("val", "1");
  $(".sbtn").click(function(e) {
    var ss = $(this).attr("val");
    var obj = document.getElementById("copybox");
    e.preventDefault();
    if (ss == 1 ) {
      $(".sbtn").addClass('sbtn1');
      if(obj.value == "已知晓不得转租转售电话卡，出现的法律风险由本人承担。"){
        $(".btnNext").addClass('btnNext1')
      }
      $(this).attr("val", '2')
    } else {
      $(".sbtn").removeClass('sbtn1');
      $(".btnNext").removeClass('btnNext1');
      $(this).attr("val", '1')
    }
  });
  // 和包支付
  $(".zbtn").attr("val", "1");
  $(".zbtn").click(function(e) {
    e.preventDefault();
    var zz = $(this).attr("val");
    e.preventDefault();
    if (zz == 1) {
      $(".zbtn").addClass('zbtn1');
      showMask('1')
      $(this).attr("val", '2')

    } else {
      $(".zbtn").removeClass('zbtn1');

      $(this).attr("val", '1')
    }
  });

  $(".wh").click(function(e) {
    e.preventDefault();
    showMask('2')
  });
  $(".bot").click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 30
    }, 5);
    hideMask("1")
    hideMask("2")
  });
  $('#ipt3').click(function() {
    showMask("0");
    var t1 = setTimeout(function() {
      $('.mask-cry').show();
      $('.mask-fotter').show();
      $('.mask-loding').hide();
    }, 1000);
  });
  $(".boxH").click(function() {
    showMask("3");
  });
  $('.icon-guanbi , .sure').click(function() {
    hideMask("0");
    $('.mask-cry').hide();
    $('.mask-fotter').hide();
    $('.mask-loding').show();
  });


  $('.icon-sousuo').click(function() {
    showMask("0");
  });
  $('.item').click(function() {
      $('#ipt3').text($(this)[0].innerText)
      hideMask("0")
      $('.mask-cry').hide();
      $('.mask-fotter').hide();
      $('.mask-loding').show();

    })
    // 换色
  $(".btnList .itemBtn").click(function() {
    $(this).addClass("active").siblings().removeClass("active")
  });
  // 取消
  $('.btnClose').click(function() {
    hideMask("3");
  });
  // 确定
  $('.btnSure').click(function() {
    hideMask("3");
  });


  //显示遮罩层
  function showMask(id) {
    $("#mask" + id).show();
    $("#mask" + id).css("height", $(document).height());
    $("#mask" + id).css("width", $(document).width());
    $('body').css('position', 'fixed');
    $('body').css('top', '-30px');
  }
  //隐藏遮罩层
  function hideMask(id) {
    $("#mask" + id).hide();
    $('body').css('position', 'unset');
  }
  // 输入法聚焦
  $('.ipt').on('focus', function() {
    var bodyname = document.querySelector('.ipt');
    bodyname.scrollTop = bodyname.scrollHeight;
  })

  //软键盘顶起来解决问题
  $('.ipt').on('blur', function() {
    window.scroll(0, 0)
  })
  
});
