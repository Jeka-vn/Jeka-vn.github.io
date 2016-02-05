"use strict";
function GoogleCallback(jquery, data) {
	for (var i = 0; i <= 7; i++) {
		var $title = data.results[''+i+''].title;
		var $url = data.results[''+i+''].url;
		var $content = data.results[''+i+''].content;
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
});
