var a = [];
for (var i = 0; i < 5; i++) { 
	a.push(prompt('Введите имя'));
};
var b = prompt('Ваше имя');
var flag;
for (i = 0; i < a.length; i++) {
	if (a[i] === b) {
		flag = true;
	}
};
if (flag == true) {
	alert(b + ',' + ' Поздровляю! Вы успешно вошли.');
} else {
	alert('Имя пользователя не верное.')
}

