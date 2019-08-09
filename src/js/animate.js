$(function(){

   $(window).scroll(function(){

      steps = $('.steps').offset().top;

      //console.log(heightSteps);

      if ($(this).scrollTop() > steps - 200) {

         $('.step').addClass('animate');

      }

   });

});