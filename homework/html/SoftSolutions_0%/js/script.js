$(function () {
	$('.slider_left').on('click', function (e) {
		$('.slider').animate({
			left: '+=110px'
		}, 500);
		e.preventDefault();
	}),
	$('.slider_right').on('click', function (e) {
		$('.slider').animate({
			left: '-=110px'
		}, 500);
		e.preventDefault();
	});
});