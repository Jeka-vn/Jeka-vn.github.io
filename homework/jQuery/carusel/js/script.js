$(function() {
// q - quantity.
// w - width.
(function carusel() {

	var $qSliderContent = $('.slider__content').length;
	var $wSliderContent = $('.slider__content').width();
	var $qClick = 0;
	console.log($qSliderContent);
	for (var i = 0; i < $qSliderContent; i++) {
		$('.slider__in').append("<a href='#'></a>");
		$('.slider__in > a').addClass('slider__chex');
	}
	// cancellation behavior links
	$('.slider__left, .slider__rigth').on('click', function (event) {
		event.preventDefault();
	})
	// Click on the left index
	$('.slider__left').on('click', function () {
		$qClick++;
		$('.slider__box--content').animate({
			left: '-=' + $wSliderContent + 'px'
		}, 1000)
		$('.slider__chex').eq($qClick).addClass('slider__chex--activ');
		$('.slider__chex').eq($qClick -1).removeClass('slider__chex--activ');
		if ($qClick == 6) {
			$('.slider__box--content').animate({
				left: '+=' + $wSliderContent * $qClick + 'px'
			}, 2000)
			$qClick = 0;
			$('.slider__chex').eq($qClick).addClass('slider__chex--activ');
		}
	}),
	// Click on the rigth index
	$('.slider__rigth').on('click', function () {
		$qClick--;
		$('.slider__box--content').animate({
			left: '+=' + $wSliderContent + 'px'
		}, 1000)
		$('.slider__chex').eq($qClick).addClass('slider__chex--activ');
		$('.slider__chex').eq($qClick +1).removeClass('slider__chex--activ');
		if ($qClick < 0) {
			$('.slider__box--content').animate({
				left: '-=' + $wSliderContent + 'px'
			}, 1000)
			$qClick = 0;
			$('.slider__chex').eq($qClick).addClass('slider__chex--activ');
			$('.slider__chex').eq($qClick -1).removeClass('slider__chex--activ');
		}
	})

	$('.slider__chex').eq($qClick).addClass('slider__chex--activ');


})();

});