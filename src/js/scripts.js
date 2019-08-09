new WOW().init();

$(function(){

   /* Валидация форм */

   $('#brif-form-js').validate({

      rules: {

         username: {
           required: true,
           minlength: 2,
           maxlength: 15
         },
         email: {
            required: true,
            email: true
         },
         phone: 'required'

      },
      messages: {

         username: {

            required: "Заполните поле",
            minlength: jQuery.validator.format("Минимум {0} символа"),
            maxlength: jQuery.validator.format("Максимум {0} символов")

         },
         email: {

            required: "Заполните поле",
            email: jQuery.validator.format("Введите корректный email")

         },
         phone: "Заполните поле"

      }

   });

   /* Маска ввода для телефона */

   $('.phone').mask('8 (999) 999-99-99');

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