
//1
for (let i = 0; i < 2; i++) {
	console.log("привет");
};
//2
let i = 0;
while (i < 5) {
	i++;
	console.log(i);
};
//3
for (let i = 7; i < 23; i++) {
	console.log(i);
};
//4
let obj= {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
};
for (let key in obj) { 
	alert(`${key} — зарплата  ${obj[key]} долларов`)
};
//5
let num = 1;
for (let n = 1000; n > 0; num++) {
	n = n / 2
	if (n < 50) {
		console.log(`в результате получилось ${n}`);
		break;
	};
};
console.log(`количество проходов ${num}`);
//6
for (let i = 3; i <= 31; i += 7) {
	console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}