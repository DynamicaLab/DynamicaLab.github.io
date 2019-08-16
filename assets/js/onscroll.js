$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $("#navbar").addClass("navbar-white");
         $("#navbar").removeClass("navbar-transparent");
      }
      if ($(this).scrollTop() < 50) {
         $("#navbar").removeClass("navbar-white");
         $("#navbar").addClass("navbar-transparent");
      }
   });
});