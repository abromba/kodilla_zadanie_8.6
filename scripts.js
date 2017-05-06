var a = Number(prompt('Podaj jakąś liczbę A'));
var b = Number(prompt('Podaj jakąś liczbę B'));
var result = (a * a) + (2 * a * b) - (b * b);
if (Number.isNaN(a&&b)){
	console.log('Nie mogę tego policzyć, bo pomyliłeś się wpisując dane. Spróbuj jeszcze raz!');
} else {
	console.log('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result);
	console.log(result === 0 ? 'Wynik to 0!' : result < 0 ? 'Wynik jest ujemny.' : 'Wynik jest dodatni.');
}