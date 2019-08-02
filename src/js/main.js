var button = document.querySelector('#button-js');
var modal = document.querySelector('#modal-js');
var close = document.querySelector('#close-js');

button.addEventListener('click', function() {

   modal.classList.add('modal_active');

   setTimeout(closed, 5000);

});

close.addEventListener('click', closed());

function closed() {

   modal.classList.remove('modal_active');

}