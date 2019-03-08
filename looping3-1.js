var kata ='LOOPING PERTAMA';
var coding = '0';
var kata2 ='LOOPING KEDUA';
var fullstack ='20';



console.log(kata);
while(coding <= 20 ){
	console.log( coding + ' I love coding');
  coding = coding + 1;
	coding ++;

}

console.log(kata2);
while(fullstack >= 0 ){
	console.log(fullstack + ' -  I will become fullstack developer');
  fullstack = fullstack - 1;
	fullstack --;

	}




var kata ='LOOPING PERTAMA';
var coding = '0';
var kata2 ='LOOPING KEDUA';
var fullstack ='20';

console.log(kata);
for (var coding = 0 ; coding <= 20; coding++){
	console.log( coding + '- I love coding');

}

console.log(kata2);
for (var fullstack = 20 ; fullstack >=0; fullstack--){
	console.log( fullstack + ' -  I will become fullstack developer');
}











for (var ganjil = 1 ; ganjil <= 100; ganjil++){
	if ((ganjil %2)==1) {
	console.log( ganjil + 'GANJIL');
}
else if ((ganjil%2)===0){
	console.log(ganjil + 'GENAP');
}
}








for (var angka = 1 ; angka <= 100; angka = angka + 2){
	if ((angka %3)==0) {
	console.log( angka + 'Kelipatan 3');
}
}

for (var angka = 1 ; angka <= 100; angka = angka + 5){
	if ((angka %6)==0) {
	console.log( angka + 'Kelipatan 6');
	}}

	for (var angka = 1 ; angka <= 100; angka = angka + 9){
	if ((angka %10)==0) {
	console.log( angka + 'Kelipatan 10');
}
}
