/*var a = prompt('Podaj jakąś liczbę A');
var b = prompt('Podaj jakąś liczbę B');
var result = (a * a) + (2 * a * b) - (b * b);

alert('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result );
console.log('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result);

if (result>=0) {
    alert('wynik jest dodatni')
    console.log('wynik jest dodatni')
} else if (result<=0){
    alert('wynik jest ujemny')
    console.log('wynik jest ujemny')
} else if (result==0){
    alert('wynik to 0!')
    console.log('wynik działania to 0')
}

*/
	
var a = Number(prompt('Podaj jakąś liczbę A'));
var b = Number(prompt('Podaj jakąś liczbę B'));
var result = (a * a) + (2 * a * b) - (b * b);

alert('policzę ile to jest (a * a) + (2 * a * b) - (b * b), daj mi chwilę ');
console.log('policzę ile to jest (a * a) + (2 * a * b) - (b * b), daj mi chwilę');

if (Number.isNaN(a)) {
    alert('Błąd: A nie było liczbą');
    console.log('Błąd: A nie było liczbą');
	//return a;
} 
else if(Number.isNaN(b)) {
    alert('Błąd: B nie było liczbą');
    console.log('Błąd: B nie było liczbą');
	//return b;
}
else {
    alert('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result );
    console.log('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result);
}

if (result>=0) {
    alert('wynik jest dodatni');
    console.log('wynik jest dodatni');
} else if (result<=0) {
    alert('wynik jest ujemny');
    console.log('wynik jest ujemny');
} else {
    alert('wynik to 0!');
    console.log('wynik działania to 0');
}