var a = 2;
var b = 1;
var value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value == 0) {
	console.log("Wynik jest równy zero");
}
else if (value > 0) {
	console.log("Wynik jest większy od zera");
}
else {
	console.log("Wynik jest mniejszy od zera");
}