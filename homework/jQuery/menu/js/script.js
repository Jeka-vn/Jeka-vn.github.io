$(function () {

	$('.slider__left, .slider__rigth').on('click', function (e) {
		e.preventDefault();
	});

	(function slider() {
		var $click = 0;
		var $widhtLi = $('.slider__content li').width() +1;
		var $marginLi = 43;
		var $li = $widhtLi + $marginLi;
		var $clickLi = $li;


		$('.slider__left').on('click', function () {
			$click++;
			$clickLi += $clickLi;
			console.log($clickLi);
			$('.slider__content').animate({
				left: '-=' + $li * 4 + 'px'
			}, 1000)
			$('.btn').removeClass('activ');
			$('.btn').eq($click).addClass('activ');
			$('.btn').eq($click -1).removeClass('activ');
			if ($click == 2) {
				$('.slider__content').css({
					left: 0 + 'px'
				})
			}
		}),
		$('.slider__rigth').on('click', function () {
			$click--;
			$('.slider__content').animate({
				left: '+=' + $li * 4 + 'px'
			}, 1000)
			$('.btn').removeClass('activ');
			$('.btn').eq($click).addClass('activ');
			$('.btn').eq($click +1).removeClass('activ');
		})

		$('.btn').on('click', function () {

			var $btn = $('.btn').index(this);

			$('.btn').removeClass('activ');
			$('.btn').eq($btn).addClass('activ');

		})

	})();
	
});