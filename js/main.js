'use strict';

var $card = $('.card');
for (var i = 0; i < 20; i++) {
    $card.clone().appendTo('.card-list'); // clone some examples!
}

$('.card').click(function() {
    // if ($(this).hasClass('active')) {
    // 	$(this).removeClass('active');
    // 	return false;
    // }
    $('.card').removeClass('active ');
    $(this).addClass('active');
});



