/*//1
const array = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < array.length; index++) {
	console.log(array[index]);
	if (array[index] === 10)
		break;
}

//2
const array2 = [1, 5, 4, 10, 0, 3];
let ind = array2.indexOf(4);
console.log(ind);

//3
const array3 = [1, 3, 5, 10, 20];
let jo = array3.join(' ');
console.log(jo);

//4
const array4 = [];
for (let i = 0; i < 3; i++) {
	array4.push([]);
	for (let n = 0; n < 3; n++) {
		array4[i].push(1);
	}
};
console.log(array4);

//5
const array5 = [1, 1, 1];
array5.push(2, 2, 2)
console.log(array5);

//6
const array6 = [9, 8, 7, 'a', 6, 5];
array6.sort();
array6.pop();
console.log(array6);

//7
const array7 = [9, 8, 7, 6, 5];
const guess = Number(prompt('Попробуй угадать число'))
if (array7.includes(guess)) { 
	alert ('Угадал');
} else {
	alert ('Не угадал');
};

//8
const array8 = 'abcdef';
let arr = array8.split('');
arr.reverse();
let result = arr.join('');
console.log(result);

//9
const array9 = [[1, 2, 3],[4, 5, 6]];
let arr = [].concat(...array9);
console.log(arr);

//10
const array10 = [2, 3, 5, 8, 4, 7, 9];
let arr = 0;
for (const value of array10) {
	arr += value;
	console.log(arr);
}

//11
const array11 = [1, 2, 4, 7];
let square = array11
function arr(square) {
	return square.map(i => i ** 2);
}
console.log(arr(square));

//12
const array12 = ["слова", "произвольные", "писать", "?"];
const arr = array12.map(array12 => {
	return array12.length
});
console.log(arr);

//13
const array13 = [3, -7, 9, 2, -8, -1, 0];
const arr = array13.filter(i => i < 0);
console.log(arr);

//14
const array14 = [];
for (let i = 0; i < 10; i++) {
	let arr = Math.ceil(Math.random() * 10);
	array14.push(arr)
};
console.log(array14);
let evenNumbers = array14.filter(i => i % 2 === 0);
console.log(evenNumbers);*/

//15
const array15 = [];
for (let i = 0; i < 6; i++) {
	let arr = Math.ceil(Math.random() * 10);
	array15.push(arr)
};
console.log(array15);
let value = array15.reduce((i, array15) => {
	return i + array15/6
}, 0);
console.log(value);