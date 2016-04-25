$(function () {

	(function menu() {
		$('.menuSub>a').on('click', function (e) {
			$('.subMenu').slideToggle(400);
			e.preventDefault();
		})
	})();

	//valid form comment

	(function valid() {
		var $error = {
			name: 'Будь ласка, заповниіть поле "Ваше Ім\'\я"!',
			email: 'Ви не вірно заповнили поле "Ваш E-mail"'
		};

		$('.form__submit').on('click', function (e) {
			var $formName = $('.form__name').val().length;

			if ($formName === 0) {
				$('.error__message').show(200).html($error.name);
			} else {
				$('.error__message').hide(200);
			}
			e.preventDefault();
		})
	})();

});