"use strict";

function GoogleCallback(jquery, data) {
	for (var i = 0; i <= 7; i++) {
		var $title = data.results[''+i+''].title,
		    $url = data.results[''+i+''].url,
		    $content = data.results[''+i+''].content;
		$('body').append('<div class="result'+i+'"></div>');
		$('.result'+i+'').append('<a class="title"></a>');
		$('.result'+i+'').append('<p class="url"></p>');
		$('.result'+i+'').append('<p class="text"></p>');
		$('.result'+i+' .title').html($title).attr('href', $url);
		$('.result'+i+' .url').html($url);
		$('.result'+i+' .text').html($content);
	}
};

$(function() {
	$('.buttom').on('click', function (e) {
		var $input = $('.search').val();
		$('div').remove();
		e.preventDefault();
		$.ajax({
			url:
			'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ $input + '&callback=GoogleCallback&context=?',
			dataType: 'jsonp'
		});
	});

	// ООП

	function Human() {
		this.name = 'Eugen';
		this.age = 24;
		this.heigth = 168;
		this.mass = 68;
	};

	function Worker() {
		this.job = 'Westelecom';
		this.play = 0;
		this.method = function() {
			alert('Работай');
		}
	};

	function Student() {
		this.learn = 'Goit';
		this.money = 0;
		this.meth = function () {
			alert('Смотреть сериалы');
		}
	};

	var newHuman = new Human(),
	    newWorker = new Worker(),
	    newStudent = new Student();

	newHuman.prototype = newWorker;
	newWorker.prototype = newStudent;

	console.log(newHuman);
});
