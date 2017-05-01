var a = prompt('Podaj jakąś liczbę A');
var b = prompt('Podaj jakąś liczbę B');
var wynik = [(a * a) + (2 * a * b) - (b * b)];

alert('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + wynik );
console.log('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + wynik);

if (wynik=0) {
	alert('wynik to 0!')
	console.log('wynik działania to 0')
} else { alert('wynik nie równa się 0!')
console.log('wynik działania nie równa sié 0')
}