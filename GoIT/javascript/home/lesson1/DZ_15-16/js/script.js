function GoogleCallback(jquery, data) {
console.log(data.results[0]);

	var title = data.results[0].title;
	var url = data.results[0].url;
	var content = data.results[0].content;
 for (var g = 1; g < 8; g++) {
 $('result'+g+', .title').html(title).attr('href', url);
 $('result'+g+', .url').text(url);
 $('result'+g+', .text').html(content);
 }
};
$(function() {
	// цыкл создание блоков
for (var i = 1; i <= 8; i++) {
	$('body').append('<div class="result'+i+'"></div>');
	$('.result'+i+'').append('<a class="title"></a>');
	$('.result'+i+'').append('<p class="url"></p>');
		$('.result'+i+'').append('<p class="text"></p>');
}
// 
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
