

function seasons(){

	const monthNumber = Number(prompt("Введите номер месяца"));
	switch (monthNumber) {
		case 1:
		case 2:
		case 12:
			alert('зима');
			break;
		case 3:
		case 4:
		case 5:
			alert('весна');
			break;
		case 6:
		case 7:
		case 8:
			alert('лето');
			break;
		case 9:
		case 10:
		case 11:
			alert('осень');
			break;
		default:
			alert('такого месяца не существует');
	}
}

function seasons2(){

	const fruits = [
		'Яблоко',
		'Груша',
		'Дыня',
		'Виноград',
		'Персик',
		'Апельсин',
		'Мандарин']
	const fru = [...fruits].sort(() => Math.random() - 0.5)
	alert(fru)
	let first = prompt('какой был первый фрукт')
	let last = prompt('какой был последний фрукт')
	
	block: {if (first === null || last === null) {
			break block;
		} else if (first.toLowerCase() === fru[0].toLowerCase() && last.toLowerCase() === fru[fru.length - 1].toLowerCase()) {
			alert('Правильно!')
			
		} else if (first.toLowerCase() === fru[0].toLowerCase() || last.toLowerCase() === fru[fru.length - 1].toLowerCase()) {
			alert('один фрукт не правильный')
		} else {
			alert('Ай, неправильно')
		}
	}
}