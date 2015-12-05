// записали
var a = [];
var b = [];
for (var i = 0; i < 2; i++) {
	a.push(prompt('Введите имя'));
};
// читаем
b.push(prompt('Имя'));
if (a == b) {
  document.write( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' );
}

