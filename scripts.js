var a = Number(prompt('Podaj jakąś liczbę A'));
var b = Number(prompt('Podaj jakąś liczbę B'));
var result = (a * a) + (2 * a * b) - (b * b);

console.log('Policzę ile to jest (a * a) + (2 * a * b) - (b * b), daj mi chwilę...');

console.log(
    (Number.isNaN(a)) ? 'Błąd: A nie było liczbą :(': ((Number.isNaN(b)) ? 'Błąd: B nie było liczbą :(' :  'W ynik działania to: ' + result ));
console.log(
    result === 0 ? 'Wynik to 0!' : result < 0 ? 'Wynik jest ujemny.' : (Number.isNaN(result)) ? 'Nie mogę tego policzyć, bo pomyliłeś się wpisując dane. Spróbuj jeszcze raz!' : 'Wynik jest dodatni.');
