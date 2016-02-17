$(function() {
	var sliderPx = 0;
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

});