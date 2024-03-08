//1
let a = 10;
alert(a);
a = 20;
alert(a);
//2
let firstIPhone = alert('года выпуска первого iPhone 9 января 2007 года');
//3
let creator = alert("Бренданом Айком");
//4
let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);
//5
let c = 2;
let result = 2**5;
alert(result)
//6
a = 9;
let b = 2;
alert(a % b);
//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//8
let age = prompt("Сколько вам лет?");
alert(age);
//9.0
const user = {
	name: 'Aleks',
	age: 38,
	isAdmin: true
};
//9.1
user.cityOfResidence = 'Mytishchi';
//9.2
user.age = 37;
//9.3
delete user.cityOfResidence;
//9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
//10
let name = prompt('скажите ваше имя!')
alert(`Привет, ${name}`)