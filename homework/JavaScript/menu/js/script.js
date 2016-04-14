$(function () {

	(function slider() {

		$('.spoiler__title').on('click', function () {
			var $click = $('.spoiler__title').index(this);
			console.log($click)
			$('.spoiler__content').eq($click).slideToggle(400);
		})



	})();


});
