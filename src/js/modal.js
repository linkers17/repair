$(function(){

   var button = $('#button-js');
   var modal = $('#modal-js');
   var close = $('#close-js');
   var cardLink = $('.card__link');

   button.on('click', () => {

      modal.addClass('modal_active');

   });

   cardLink.on('click', function (event) {

      event.preventDefault();

      modal.addClass('modal_active');

      var target = $(this).attr('data-target');
      $('.modal-content').load(target + '.html');

   });

   close.on('click', () => {

      modal.removeClass('modal_active');

   });

});