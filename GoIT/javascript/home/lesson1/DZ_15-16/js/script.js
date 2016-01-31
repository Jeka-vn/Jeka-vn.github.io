function GoogleCallback(jquery, data) {
	$('.test').html(data);
	console.log(data.results[0]);
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