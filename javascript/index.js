$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background", "rgba(34, 34, 34)");
    }
    else{
        $(".navbar").css("background" , "none");}
  });
});
