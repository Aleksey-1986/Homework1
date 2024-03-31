/*//1

let upperCase = 'js'
console.log(upperCase.toUpperCase());

//2

let insects = ['таракан', 'Муха', 'пчела', 'Паук', 'муравей', 'комар', 'Оса',]
let syllable = 'му'
console.log(insects)
let selection = []
insects.forEach((insect) => {
	if (insect.toLowerCase().includes(syllable.toLowerCase())) {
		selection.push(insect)
	}
})
console.log(selection)

//2 или так (задание не понял)

let insects = ['таракан', 'Муха', 'пчела', 'Паук', 'муравей', 'комар', 'Оса',];
console.log(insects)
let selection = []
function insect() {
	for (let i = 1; i < insects.length; i++) {
		selection.push(insects[i])
	}
}
insect()
console.log(selection)

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

console.log(Math.floor(Math.random() * 10))

//6

const array = []
const long = (arr) => {
	for (let i = 0; i < Math.floor(arr/2); i++) {
		array.push(Math.floor(Math.random() * arr))
	}
	console.log(array)
}
long(12)

//7

const long = (a, b) => {
	let num1 = Math.min(a, b)
	let num2 = Math.max(a, b)
	let res = Math.round(Math.random() * (num2 - num1)) + num1
	console.log(res)
}
long(2, 9)

//8

let date = new Date()
const options = {
	weekday: 'long', year: 'numeric', month: 'long', 
	day: 'numeric'
}
console.log(date.toLocaleDateString('ru-RU', options))

//9

let currentDate = new Date()
const options = {
	weekday: 'long', year: 'numeric', month: 'long', 
	day: 'numeric'
}
console.log(currentDate.toLocaleDateString('ru-RU', options))
let days73 = 73 * 24 * 60 * 60 * 1000
let searchDate = +currentDate + days73
let daysAgo20 = new Date(searchDate) 
console.log(`через 73 дня будет
"${daysAgo20.toLocaleDateString('ru-RU', options)}"`)

//10

let date = new Date()
const options = {
	weekday: 'long', year: 'numeric', month: 'long', 
	day: 'numeric'
}
console.log(date.toLocaleDateString('ru-RU', options))
console.log(date.toLocaleTimeString())*/
