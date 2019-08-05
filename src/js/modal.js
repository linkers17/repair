$(function(){

   var button = $('#button-js');
   var modal = $('#modal-js');
   var close = $('#close-js');

   button.on('click', () => {

      modal.addClass('modal_active');

      setTimeout(closed, 5000);

   });

   close.on('click', () => {

      modal.removeClass('modal_active');

   });

});