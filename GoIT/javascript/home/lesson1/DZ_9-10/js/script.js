$(function () {
	$('.test').hover(function() {
		$('.submenu').fadeToggle(200);
	}),
	$('.test1').hover(function() {
		$('.submenu1').fadeToggle(200);
	});
	var $images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
	var $curectIMG = 0;
	$('#img').attr('src', $images[$curectIMG]);
	$('.left__a').on('click', function (e) {
		if ($curectIMG != 0) {
			$curectIMG--;
			$('#img').fadeToggle('fast');
			$('#img').fadeToggle('fast');
			$('#img').attr('src', $images[$curectIMG]);
			e.preventDefault();
		}
	});
	$('.rigth__a').on('click', function () {
		if ($curectIMG != $images.length - 1) {
			$curectIMG++;
			$('#img').fadeToggle('fast');
			$('#img').fadeToggle('fast');
			$('#img').attr('src', $images[$curectIMG]);
		}
	});
});