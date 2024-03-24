/*//1
const comparison = (a, b) => {
	return a <= b ? a : b;
};

//2
let check = Number (prompt("проверка на четность"));
function par (check) {
	alert(check % 2 === 0 ? `${check} число четное` : `${check} число нечетное`);
};
par (check)

//3.1
let square = Number (prompt("введите число"));
const par = (square) => console.log(square * square);
par (square)

//3.2
let square = Number (prompt("введите число"));
let par = (square) => square * square;

//4
let user = Number (prompt("сколько вам лет?"));
function age (user) {
	if (user < 0) {
		alert('Вы ввели неправильное значение')
	} else if (user >= 0 && user <= 12) {
		alert('Привет, друг!')
	} else if (user >= 13 && user <= 130) {
		alert('Добро пожаловать!')
	} else {
		alert('Люди столько не живут!!!')
	}
};
age (user)

//5
let number1 = Number (prompt("введите два числа"));
let number2 = Number (prompt("введите второе число"));
function numberHandler (number1, number2) {
	if (isNaN(number1) || isNaN(number2)) {
		return ('Одно или оба значения не являются числом');
	} else {
		return (number1 * number2);
	}
};

//6
let number = Number (prompt("введите число"));
function numberHandler (number) {
	if (isNaN(number)) {
		return('Переданный параметр не является числом');
	} else {
		return(`${number} в кубе равняется ${number ** 3}`);
	}
};*/

//7
function getArea() {
	return 3.14 * this.radius * this.radius;
}
function getPerimeter() {
	return 2 * 3.14 * this.radius;
}

const circle1 = {
	radius: 13,
	getArea: getArea,
	getPerimeter: getPerimeter,
};
const circle2 = {
	radius: 7,
	getArea: getArea,
	getPerimeter: getPerimeter,
};

console.log(circle2.getArea());
console.log(circle1.getArea());
console.log(circle2.getPerimeter());
console.log(circle1.getPerimeter());