$(function(){

   /* Обработка и отправка формы через AJAX */

   $('#offer-form-js').on('submit', function(event) {

      event.preventDefault();

      $.ajax({
         url: 'mail.php',
         type: 'POST',
         data: $(this).serialize(),
         success: function(data) {
            $('.success').fadeIn(2000);
            $('.success').text('Спасибо за заявку, скоро мы Вам перезвоним.');
            $('.success').fadeOut(7000);
            $(`#offer-form-js input`).val('');
         },
         error: function(jqXHR, textStatus) {
            console.log(jqXHR + ': ' + textStatus);
         }
      });

   });

   // Подключение slick слайдера

   $('.slider').slick({
      slidesToShow: 3,
      prevArrow: $('.arrows__left'),
      nextArrow: $('.arrows__right'),
      responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 2
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 1
           }
         }
      ]
   });

});