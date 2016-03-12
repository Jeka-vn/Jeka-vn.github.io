
$(function() {
// Slider
var $colection = ['img/siteImg/works/st1.jpg', 'img/siteImg/works/st2.jpg', 'img/siteImg/works/st3.jpg', 'img/siteImg/works/4.jpg', 'img/siteImg/works/5.jpg', 'img/siteImg/works/6.jpg', 'img/siteImg/works/7.jpg', 'img/siteImg/works/8.jpg', 'img/siteImg/works/9.jpg'];


for (var i = 0; i < $colection.length; i++) {
	console.log($colection[i]);
}


$('.works__left').on('click', function () {
	$('.works__img').attr('src', $colection[3])
})








$('.works__left, .works__right').on('click', function (e) {
	e.preventDefault();
});

// Galery
$('.activity').masonry({
	itemSelector: '.item',
	columnWidth: 1
});

$.ajax({
	url: 'http://api.pixplorer.co.uk/image?word=sea&amount=7&size=600',
	type: 'get',
	dataType: "JSON",
	success: function(data){

		for (var i = 0; i < 7; i++) {
			var $data = data.images[i].imageurl,
			$title = data.images[i].word;
			$('.img'+i+'').attr('src', $data);
			$('.title'+i+'').html($title);
		}

	}

});


$('.ideas__submit').on('click', function (e) {
	var $input = $('.ideas__search').val();

	$.ajax({
		url: 'http://api.pixplorer.co.uk/image?word='+ $input +'&amount=7&size=tb',
		type: 'get',
		dataType: "JSON",
		success: function(data){

			for (var i = 0; i < 7; i++) {
				var $data = data.images[i].imageurl,
				$title = data.images[i].word;
				$('.img'+i+'').attr('src', $data);
				$('.title'+i+'').html($title);
			}

		}

	});
	e.preventDefault();
});


});