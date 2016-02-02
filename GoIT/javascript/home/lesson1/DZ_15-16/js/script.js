
function GoogleCallback(jquery, data) {
	var rez;
	rez = data;
	console.log(rez.results[0].title);
	var test = rez.results[0].title;
};

$(function () {
	for (var i = 1; i < 8; i++) {
		$('body').append('<div class="rez'+i+'"></div>');
		$('.rez'+i+'').append('<a class="title"></a>');
		$('.rez'+i+'').append('<p class="url"></p>');
		$('.rez'+i+'').append('<p class="text"></p>');
	$('.title').html(...);
	}
	$('.buttom').on('click', function (e) {
		var $input;
		$input = $('.search').val();
		e.preventDefault();
		$.ajax({
			url:
			'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ $input + '&callback=GoogleCallback&context=?',
			dataType: 'jsonp'
		});
	});
});