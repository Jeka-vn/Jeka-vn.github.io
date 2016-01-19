$(function() {
	// carusel
	var $left = $('.left');
	$right = $('.right'),
	$elemLi = $('.carusel'),
	$pixelOf = 125,
	$currentValue = 0;
	$left.on('click', function() {
		$currentValue +=125;
		$elemLi.animate({
			left: $currentValue + 'px'
		}, 500)
	});
	$right.on('click', function() {
		$currentValue -=125;
		$elemLi.animate({
			left: $currentValue + 'px'
		}, 500)
	});
	// template
	var html = $('#homework').html();
	var data = [{
		my_name: 'Ламбов Евгений Васильевич',
		img: 'img/cat.png',
		who_am_i: 'Капитан диванных войск',
		why_i_want_to_learn: 'Почему я хочу учить Front-End:',
		who_am_i_one: 'Мне это нравится',
		who_am_i_two: 'Хочу добиться успеха',
		who_am_i_tree: 'Нужна удаленная работа',
		my_telephone: 'Мой контактный телефон  +356785500576',
		my_profile: 'Мой профиль в вконтакте <a href="https://vk.com/lambov_1991" target="_blank">vk.com</a>',
		my_fidbek: 'Мой фидбек:',
		fidbek: 'Заборы строить не умею.'
	}];
	var content = tmpl(html ,{
		data: data
	});
	$('body').append(content);
});