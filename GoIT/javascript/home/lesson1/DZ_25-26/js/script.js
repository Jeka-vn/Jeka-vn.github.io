
$(function() {
	// Scroll

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


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



// Slider

(function worksStep () {

	var $colection = ['img/siteImg/works/st1.jpg', 'img/siteImg/works/st2.jpg', 'img/siteImg/works/st3.jpg', 'img/siteImg/works/4.jpg', 'img/siteImg/works/5.jpg', 'img/siteImg/works/6.jpg', 'img/siteImg/works/7.jpg', 'img/siteImg/works/8.jpg', 'img/siteImg/works/9.jpg'],
	    $clickOne = 0,
	    $clickTwo = 0,
	    $clickThree = 0;

	$('.works__left').eq(0).on('click', function () {
		$clickOne++;
		var $img = $colection[$clickOne];
		$('.works__img').eq(0).attr('src', $img);


		if ($clickOne == 8) {
			$clickOne = 0;
		}
	})

	$('.works__right').eq(0).on('click', function () {
		$clickOne--;
		var $img = $colection[$clickOne];
		$('.works__img').eq(0).attr('src', $img);
	});



	$('.works__left').eq(1).on('click', function () {
		$clickTwo++;
		var $img = $colection[$clickTwo];
		$('.works__img').eq(1).attr('src', $img);

		if ($clickTwo == 8) {
			$clickTwo = 0;
		}
	})

	$('.works__right').eq(1).on('click', function () {
		$clickTwo--;
		var $img = $colection[$clickTwo];
		$('.works__img').eq(1).attr('src', $img);
	});


	$('.works__left').eq(2).on('click', function () {
		$clickThree++;
		var $img = $colection[$clickThree];
		$('.works__img').eq(2).attr('src', $img);

		if ($clickThree == 8) {
			$clickThree = 0;
		}
	})

	$('.works__right').eq(2).on('click', function () {
		$clickThree++;
		var $img = $colection[$clickThree];
		$('.works__img').eq(2).attr('src', $img);
	});


	$('.works__left, .works__right').on('click', function (e) {
		e.preventDefault();
	});
})();


});