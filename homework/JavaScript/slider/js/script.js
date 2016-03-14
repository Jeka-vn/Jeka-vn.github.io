$(function() {
	
	(function () {

		var $imgColection = ['img/st1.jpg', 'img/st2.jpg', 'img/st3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'],
		    $colectionLength,
		    $click = 0;

		for (var i = 0; i < $imgColection.length; i++) {
			$colectionLength = i;
		}


		$('.slider__left').on('click', function (e) {
			$click++;
			$('.slider__img').animate({
				opacity: 0
			}, 300);

			function attributeChange() {
				$('.slider__img').attr('src', $imgColection[$click]);
			};

			setTimeout(attributeChange, 300);

			$('.slider__img').animate({
				opacity: 1
			}, 300);

			if ($click === $colectionLength) {
				$click = 0;
			}

			e.preventDefault();
		});

	})();

});