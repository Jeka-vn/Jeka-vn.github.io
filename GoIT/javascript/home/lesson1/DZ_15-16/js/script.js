
$(function() {
	$('.buttom').click(function (e) {
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
function GoogleCallback(jquery, data) {
	var data;
	$('.result>.title').html(data.results[0].title).attr('href', data.results[0].unescapedUrl);
	$('.result>.url').html(data.results[0].unescapedUrl);
	$('.result>.text').html(data.results[0].content);

	$('.result1>.title').html(data.results[1].title).attr('href', data.results[0].unescapedUrl);
	$('.result1>.url').html(data.results[1].unescapedUrl);
	$('.result1>.text').html(data.results[1].content);

	$('.result2>.title').html(data.results[2].title).attr('href', data.results[0].unescapedUrl);
	$('.result2>.url').html(data.results[2].unescapedUrl);
	$('.result2>.text').html(data.results[2].content);

	$('.result3>.title').html(data.results[3].title).attr('href', data.results[0].unescapedUrl);
	$('.result3>.url').html(data.results[3].unescapedUrl);
	$('.result3>.text').html(data.results[3].content);

	$('.result4>.title').html(data.results[4].title).attr('href', data.results[0].unescapedUrl);
	$('.result4>.url').html(data.results[4].unescapedUrl);
	$('.result4>.text').html(data.results[4].content);

		$('.result5>.title').html(data.results[5].title).attr('href', data.results[0].unescapedUrl);
	$('.result5>.url').html(data.results[5].unescapedUrl);
	$('.result5>.text').html(data.results[5].content);
};