var a = prompt('Podaj jakąś liczbę A');
var b = prompt('Podaj jakąś liczbę B');
var result = [(a * a) + (2 * a * b) - (b * b)];

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


/*	
var a = prompt('Podaj jakąś liczbę A');
var b = prompt('Podaj jakąś liczbę B');
var result = (a * a) + (2 * a * b) - (b * b);

alert('policzę ile to jest (a * a) + (2 * a * b) - (b * b), daj mi chwilę ');
console.log('policzę ile to jest (a * a) + (2 * a * b) - (b * b), daj mi chwilę');

if (a==NaN)||(b==NaN){
    alert('Błąd: to co wpisałeś nie było liczbą');
    console.log('Błąd: to co wpisałeś nie było liczbą');
    return "zacznij jeszcze raz";
} 
if (a==Number) && (b==Number){
    alert('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result );
    console.log('wynik działania (a * a) + (2 * a * b) - (b * b) to: ' + result);
}

if (result>=0) {
    alert('wynik jest dodatni');
    console.log('wynik jest dodatni');
} else if (result<=0){
    alert('wynik jest ujemny');
    console.log('wynik jest ujemny');
} else if (result==0){
    alert('wynik to 0!');
    console.log('wynik działania to 0');
}
*/