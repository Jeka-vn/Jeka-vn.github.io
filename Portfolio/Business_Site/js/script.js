$(function () {

	$('.radio_in').on('click', function () {

		var radioIndex = $(this).index();

		if (radioIndex === radioIndex) {
			$('#slider_img').attr({
				src: 'img/siteImg/slider/'+radioIndex+'.jpg'
			})
		}
	});

$('.what_menu .what_link').on('click', function (e) {
var linkIndex = $('.what_link').index();
console.log(linkIndex);


	e.preventDefault();
})

});

