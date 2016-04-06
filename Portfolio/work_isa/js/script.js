$(function () {


	(function slider() {

		var $click = 0;
		var $lengthLi = $('.slider__slid li').length;


		$('.slider__left').on('click', function (e) {
			$click++;
			$('.slider__slid li').animate({
				left: '-=970px'
			}, 1000)
			e.preventDefault();
			if ($click == $lengthLi) {
				$('.slider__slid li').animate({
					left: '0px'
				}, 2000)
				$click = 0;
			}
		}),
		$('.slider__right').on('click', function (e) {
			$click--;
			$('.slider__slid li').animate({
				left: '+=970px'
			}, 1000)
			e.preventDefault();
			if ($click <= 0) {
				$('.slider__slid li').animate({
					left: '0px'
				})
				$click = 0;
			}
		});


	})();

});