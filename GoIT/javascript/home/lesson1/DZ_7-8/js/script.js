$(function() {
	// tabs
	var $tabs = $('.tabs li');
	var $content = $('.content');
	$tabs.on('click', showTabs);
	function showTabs (e) {
		var index = $(this).index();
		$content.hide();
		$content.eq(index).show();
	}
	$content.first().show();
// form
var $num = /^\d*[0-9](|.\d*[0-9],\d*[0-9])?$/;
var $email = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
$('#login').focusout(function() {
	var $valLogin = $('#login').val();
	if (!$num.test($valLogin)) {
		$('#message').hide();
	} else {
		$('#message').show().html('Логин не верный!');
	};
}),
$('#email').focusout(function() {
	var $valEmail = $('#email').val();
	if ($email.test($valEmail)) {
		$('#message').hide();
	} else {
		$('#message').show().html('E-Mail не верный!');
	};
}),
$('#pass').focusout(function() {
	var $valPass = $('#pass').val();
	if ($num.test($valPass)) {
		$('#message').hide();
	} else {
		$('#message').show().html('Пароль не верный!');
	};
});
}); 