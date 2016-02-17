$(function() {
	var click = 0,
	click1 = 0,
	click2 = 0,
	click3 = 0,
	sliderPx = 0;
	function Slider () {
		sliderPx += 1160;
		$('.slider__box').animate({
			right: '+=1160px'
		}, 2000)
		if (sliderPx === 2320) {
			setTimeout(SliderR, 3900)
		}
	};

	function SliderR () {
		sliderPx += 1160;
		$('.slider__box').css({
			right: '0px'
		})
		sliderPx = 0;
	};

	setInterval(Slider, 4000);



	$('.benners__panel').on('click', function() {
		$('.panel__content').slideToggle();
		$('.benners__panel').css({
			background: '#f4b60d'
		})
		$('.benners__panel span').css({
			color: '#fff'
		})
		$('.panel__box img').attr('src', 'img/panel/minus.png');
		click += 1;
		if (click === 2) {
			$('.benners__panel').css({
				background: '#fff'
			})
			$('.benners__panel span').css({
				color: '#000'
			})
			$('.panel__box img').attr('src', 'img/panel/plus.png');
		}
		if (click === 3) {
			click -= 2;
		}
	})

	$('.benners__panel1').on('click', function() {
		$('.panel__content1').slideToggle();
		$('.benners__panel1').css({
			background: '#f4b60d'
		})
		$('.benners__panel1 span').css({
			color: '#fff'
		})
		$('.panel__box1 img').attr('src', 'img/panel/minus.png');
		click1 += 1;
		if (click1 === 2) {
			$('.benners__panel1').css({
				background: '#fff'
			})
			$('.benners__panel1 span').css({
				color: '#000'
			})
			$('.panel__box1 img').attr('src', 'img/panel/plus.png');
		}
		if (click1 === 3) {
			click1 -= 2;
		}
	})

	$('.benners__panel2').on('click', function() {
		$('.panel__content2').slideToggle();
		$('.benners__panel2').css({
			background: '#f4b60d'
		})
		$('.benners__panel2 span').css({
			color: '#fff'
		})
		$('.panel__box2 img').attr('src', 'img/panel/minus.png');
		click2 += 1;
		if (click2 === 2) {
			$('.benners__panel2').css({
				background: '#fff'
			})
			$('.benners__panel2 span').css({
				color: '#000'
			})
			$('.panel__box2 img').attr('src', 'img/panel/plus.png');
		}
		if (click2 === 3) {
			click2 -= 2;
		}
	})

	$('.benners__panel3').on('click', function() {
		$('.panel__content3').slideToggle();
		$('.benners__panel3').css({
			background: '#f4b60d'
		})
		$('.benners__panel3 span').css({
			color: '#fff'
		})
		$('.panel__box3 img').attr('src', 'img/panel/minus.png');
		click3 += 1;
		if (click3 === 2) {
			$('.benners__panel3').css({
				background: '#fff'
			})
			$('.benners__panel3 span').css({
				color: '#000'
			})
			$('.panel__box3 img').attr('src', 'img/panel/plus.png');
		}
		if (click3 === 3) {
			click3 -= 2;
		}
	})

});