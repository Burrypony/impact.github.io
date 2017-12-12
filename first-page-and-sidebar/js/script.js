$(".o-header__burger-btn").click(function(){
  $(".o-sidebar").addClass("u-open-sidebar");
  $(".o-sidebar").removeClass("u-close-sidebar");
});
$(".burger-btn--active").click(function(){
  $(".o-sidebar").addClass("u-close-sidebar");
  $(".o-sidebar").removeClass("u-open-sidebar");
});
$(".c-header-menu__sign-in-btn").click(function(){
  $(".o-main-page--darkened").css("display","block");
  $(".o-sign-in").css("display","flex");
  $("html").css("overflow-y","hidden");
});
$(".o-main-page--darkened").click(function(){
  $(".o-sign-in").css("display","none");
  $(".o-main-page--darkened").css("display","none");
  $("html").css("overflow-y","scroll");
});



// FORGOT PASSWORD

$("#forgot-password-btn").click(function(){
  $(".o-forgot-password").css("display", "flex");
  $(".o-sign-in").css("display","none");
});
$(".o-main-page--darkened").click(function(){
  $(".o-main-page--darkened").css("display","none");
  $(".o-forgot-password").css("display", "none");
});
