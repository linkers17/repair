$(function(){

   /* Обработка и отправка формы через AJAX */

   $('#offer-form-js').on('submit', function(event) {

      event.preventDefault();

      $.ajax({
         url: 'mail.php',
         type: 'POST',
         data: $(this).serialize(),
         success: function(data) {
            $('.success').text(data + ', Ваша форма отправлена.');
         },
         error: function(jqXHR, textStatus) {
            console.log(jqXHR + ': ' + textStatus);
         }
      });

   });

});