$(function () {

	(function menu() {
		$('.menuSub>a').on('click', function (e) {
			$('.subMenu').slideToggle(400);
			e.preventDefault();
		})
	})();

});