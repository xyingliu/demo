$(document).ready(function () {
  $(".pic").click(function () {
    $(".filter").removeClass("hide");
    $("body").css("overflow", "hidden");
  });
  $(".close").click(function () {
    $(".filter").addClass("hide");
    $("body").css("overflow", "");
  });
  $(".btn").click(function () {
    location.href = "./hint.html";
  });
});
