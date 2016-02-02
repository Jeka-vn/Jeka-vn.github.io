"use strict";
function GoogleCallback(jquery, data) {
	console.log(data.results);
	var ge;

	for ( ge = 1; ge <= 7; ge++) {
		$('result'+ge+', .title').html(title).attr('href', url);
		$('result'+ge+', .url').text(url);
		$('result'+ge+', .text').html(content);
		var title = data.results[''+ge+''].title;
		var url = data.results[''+ge+''].url;
		var content = data.results[''+ge+''].content;
		console.log(data.results[''+ge+''].title);	
		console.log(data.results[''+ge+''].url);	
		console.log(data.results[''+ge+''].content);	
	}
};
$(function() {
	for (var i = 1; i <= 7; i++) {
		$('body').append('<div class="result'+i+'"></div>');
		$('.result'+i+'').append('<a class="title"></a>');
		$('.result'+i+'').append('<p class="url"></p>');
		$('.result'+i+'').append('<p class="text"></p>');
	}
	$('.buttom').on('click', function (e) {
		var $input;
		$
		$input = $('.search').val();
		e.preventDefault();
		$.ajax({
			url:
			'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ $input + '&callback=GoogleCallback&context=?',
			dataType: 'jsonp'
		});
	});
});
