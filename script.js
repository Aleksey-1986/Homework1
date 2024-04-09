/*//1

let upperCase = 'js'
console.log(upperCase.toUpperCase());

//2 

function inse (insects, syllable) {
	let selection = []
	for (let i = 0; i < insects.length; i++) {
		if (insects[i].toLowerCase().startsWith(syllable.toLowerCase())) {
			selection.push(insects[i])
		}
	}
	return selection
}
console.log(inse(['таракан', 'Муха', 'пчела', 'Паук', 'муравей', 'комар', 'Оса'], 'му'))

//3

let num = 32.58884
console.log(Math.ceil(num))
console.log(Math.floor(num))
console.log(Math.round(num))

//4

console.log(Math.max(52, 53, 49, 77, 21, 32))
console.log(Math.min(52, 53, 49, 77, 21, 32))

//4 (или из массива)

const num = [52, 53, 49, 77, 21, 32]
console.log(Math.max(...num))
console.log(Math.min(...num))

//5
function func(){
	return Math.floor((Math.random() * 10) +1)
}
console.log(func())

//6


const long = (arr) => {
	const array = []
	for (let i = 0; i < Math.floor(arr/2); i++) {
		array.push(Math.floor(Math.random() * arr))
	}
	console.log(array)
}
long(11)

//7

const long = (a, b) => {
	let num1 = Math.min(a, b)
	let num2 = Math.max(a, b)
	let res = Math.round(Math.random() * (num2 - num1)) + num1
	return res
}
console.log(long(2, 9))

//8

let date = new Date()
const options = {
	weekday: 'long', year: 'numeric', month: 'long', 
	day: 'numeric'
}
console.log(date.toLocaleDateString('ru-RU', options))

//9

let currentDate = new Date()
let curr = currentDate.setDate(73 + currentDate.getDate())
let days75 = new Date(curr)
console.log(`через 73 дня будет
"${days75}"`)*/

//10

function daTime (year, month, number, watch, minutes) {
	let date = new Date(year, month, number, watch, minutes)
	const options = {
		year: 'numeric', month: 'long', 
		day: 'numeric'
	}
	const options1 = {
		weekday: 'long',
	}
	console.log(`${date.toLocaleDateString('ru-RU', options, options1)} —— это ${date.toLocaleDateString('ru-RU', options1)} ${date.toLocaleTimeString('ru-RU')}`)
}
daTime(2020, 10, 20, 7, 40)