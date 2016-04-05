$(function() {
	

	(function slider() {

var $sliderContent = $('.slider__content').length;
var $click = 0

$('.slider__left').on('click', function (e) {
	$click++;
$('.slider__content').eq($click -1).animate({
	opacity: 0
}, 1000);
$('.slider__content').eq($click).animate({
	bottom: '650px',
	opacity: 1
}, 1000);
e.preventDefault();
});

	})();


});