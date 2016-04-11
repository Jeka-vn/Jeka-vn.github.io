$(function () {

	$('.drop').on('click', function (event) {
		var click = $('.drop').index(this);
		$('.subMenu').eq(click).slideToggle(400);
		event.preventDefault();
	});

});
