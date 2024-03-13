
//1
let password = 'пароль';
let userPassword = String(prompt('Введите пароль'));
if (password === userPassword) {
	alert('Пароль введен верно');
} else {
	alert('Пароль введен неправильно');
}
//2
let c = Number(prompt('Введите число от "0" до "10"'));
alert(c >= 0 && c <= 10 ? 'Верно' : 'Неверно');
//3
let d = Number(prompt('Введите два, любые числа чтоб одно из них было больше "100"'));
let e = Number(prompt('и второе'));
console.log(d >= 100 || e >= 100 ? 'Верно' : 'Неверно');
//4
let a = '2';
let b = '3';
a = Number(a)
b = Number(b)
alert(a + b);
//5
var monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
	case '1':
	case '2':
	case '12':
		console.log('зима');
		break;
	case '3':
	case '4':
	case '5':
		console.log('весна');
		break;
	case '6':
	case '7':
	case '8':
		console.log('лето');
		break;
	case '9':
	case '10':
	case '11':
		console.log('осень');
		break;
	default:
		console.log('такого месяца не существует');
}