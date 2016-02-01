function GoogleCallback(jquery, data) {
	var rezult;
	rezult = data;
	console.log(rezult.results[0]);
	$('.title').html(rezult.results[0].title).attr('href', rezult.results[0].unescapedUrl);
	$('.url').html(rezult.results[0].unescapedUrl);
	$('.text').html(rezult.results[0].content);
}
$(function() {
	$('.buttum').click(function (e) {
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