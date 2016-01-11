$(function () {
	var $links = $('.punkt li');
	$links.on('click', function () {
		var $subMenu = $(this).siblings('.sub');
		$subMenu.toggle(150);
	});
});

$(function () {
	var $images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
	var $curectIMG = 0;
	$('#img').attr('src', $images[$curectIMG]);
	$('.left__a').on('click', function () {
		if ($curectIMG != 0) {
			$curectIMG--;
			$('#img').fadeToggle('fast');
			$('#img').fadeToggle('fast');
			$('#img').attr('src', $images[$curectIMG]);
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
})