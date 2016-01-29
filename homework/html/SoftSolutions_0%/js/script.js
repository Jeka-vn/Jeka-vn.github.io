$(function () {
	var $left = $('.slider_left'),
	$right = $('.slider_right'),
	$slider = $('.slider');

	$($left).on('click', function (e) {
		$($slider).animate({
			left: '+=100px'
		}, 500);
		e.preventDefault();
	}),
	$($right).on('click', function (e) {
		$($slider).animate({
			left: '-=100px'
		}, 500);
		e.preventDefault();
	});
});