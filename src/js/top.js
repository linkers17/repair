$(function(){

   let btnShow = 200;
   let delay = 1000;

   $(window).scroll(() => {

      if ($(this).scrollTop() > btnShow) {

         $('.button_top').fadeIn();

      } else {

         $('.button_top').fadeOut();

      }

   });

   $('.button_top').on('click', () => {

      $('body, html').animate({

         scrollTop: 0

      }, delay);

   });

});