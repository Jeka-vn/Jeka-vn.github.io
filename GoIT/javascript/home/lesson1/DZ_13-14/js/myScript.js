$(function() {
	'use strict';
	var questions = {
		br_breack: 'Сколько у грузовика есть вариантов торможения?',
		sp_speed: 'С какой скоростью разрешено движение грузовику по автобану?',
		tm_time: 'Можно ли водителю грузовика проводить больше 8 часов за рулем?',
		br_one: 'Один',
		br_two: 'Два',
		br_tree: 'Три',
		sp_one: '110 km/h',
		sp_two: '90 km/h',
		sp_tree: '80 km/h',
		tm_one: '10 часов',
		tm_two: '9 часов',
		tm_tree: '8 часов'
	};
	var questionsStr = JSON.stringify(questions);
	localStorage.setItem('myQuestions', questionsStr);
	var get = localStorage.getItem('myQuestions'),
	prs = JSON.parse(get),
	template = Handlebars.compile( $('#test').html() );
	$('body').append( template(prs) );
	$('.submit').on('click', function() {
		if($('.break #trye' || '.speed #two' || '.time #trye')
			.is(':checked'))
		{
			$('.modal, .message').show();
			$('.this_message p').html('Все верно, молодец!');
		} else {
			$('.modal, .message').show();
			$('.this_message p').html('А вот и нет :)');
		}
	});
	$('.close, .modal').on('click', function() {
		$('.modal, .message').hide();
	});
});