//string 

//soal 1
var word = 'JavaScript';
var  second = 'is';
var  third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it';

console.log(word + ' ' + second +' '+ third +' '+ fourth +' '+ fifth +' '+ sixth +' '+ seventh);

//soal2

    
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[3] + word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13] ;
var thirdWord = word[15] + word[16]; 
var fourthWord = word[18] + word[19];
var fifthword = word[21] + word[22] + word[23] + word[24];


console.log('First Word' +' '+ exampleFirstWord);
console.log('Second Word' +' '+ secondWord);
console.log('Third Word' +' '+ thirdWord);
console.log('Fourth Word' +' '+ fourthWord);

//soal 3


    
var word = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(3, 14 ); 
var thirdWord3 = word.substring(15, 18);
var fourthWord3 = word.substring(18, 20); 
var fifthWord3 =word.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);


//soal 4


var word = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(3, 14 ); 
var thirdWord3 = word.substring(15, 18);
var fourthWord3 = word.substring(18, 20); 
var fifthWord3 =word.substring(21, 25);

var FirstWordLength = exampleFirstWord3.length;
var secondWord4 = secondWord3.length;
var thirdWord4 = thirdWord3.length;
var fourthWord4 = fourthWord3.length;
var fifthWord4 = fifthWord3.length;


console.log('First Word: ' + exampleFirstWord3 +' '+ 'With Length' +' ' + FirstWordLength);
console.log('Second Word: ' + secondWord3+' '+ 'With Length' +' ' + secondWord4);
console.log('Third Word: ' + thirdWord3+' '+ 'With Length' +' ' + thirdWord4);
console.log('Fourth Word: ' + fourthWord3+' '+ 'With Length' +' ' + fourthWord4);
console.log('Fifth Word: ' + fifthWord3+' '+ 'With Length' +' ' + fifthWord4);

// LOOPING

//soal 1

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


//soal 2

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




// soal 3


for (var ganjil = 1 ; ganjil <= 100; ganjil++){
	if ((ganjil %2)==1) {
	console.log( ganjil + 'GANJIL');
}
else if ((ganjil%2)===0){
	console.log(ganjil + 'GENAP');
}
}



//soal 4




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


//IF ELSE


//soal 1

var nama = 'Maghfi';
var peran = '';



if (nama) {
if (peran) {
console.log('Selamat datang di Dunia Proxytia, '+nama+'.');
if (peran === 'Ksatria') {
console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu. Keren!');
} else if (peran === 'Tabib') {
console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka. Mulia sekali.');
} else if (peran === 'Penyihir') {
console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu. Pohon hidup, serang!');
}
} else {
console.log('Halo '+nama+', pilih peran untuk memulai Game!');
}
} else {
console.log('Nama harus di isi!');  
}


//soal 2

var tanggal = 23;
var bulan = 2;
var tahun = 1995;

switch(bulan) {
  case 1: { console.log(tanggal + 'Januari ' + tahun); 
  break; }
  case 2: { console.log(tanggal + 'Februari ' + tahun); 
  break; }
  case 3: { console.log(tanggal + 'Maret ' + tahun); 
  break; }
  case 4: { console.log(tanggal + 'April ' + tahun); 
  break; }
  case 5: { console.log(tanggal + 'Mei ' + tahun); 
  break; }
  case 6: { console.log(tanggal + 'Juni ' + tahun); 
  break; }  
  case 7: { console.log(tanggal + 'July ' + tahun); 
  break; }
  case 8: { console.log(tanggal + 'Agustus ' + tahun); 
  break; }
  case 9: { console.log(tanggal + 'September ' + tahun); 
  break; }
  case 10: { console.log(tanggal + 'Oktober ' + tahun); 
  break; }
  case 11: { console.log(tanggal + 'November ' + tahun); 
  break; }
  case 12: { console.log(tanggal + 'Desember ' + tahun); 
  break; }
  default : { console.log('Silahkan cek kembali tangal, bulan dan tahun nya'); }
}


// asteriks

//soal 1

var rows1 ='1';

while (rows1 <=5){
	console.log('*');
	rows1++;
}

//soal 2

var rows2 = 5;
var i=0;

while (i<rows2) {
  
  var asteriks = '*';
  var j = 1;
  
  while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}

//soal 3

var rows2 = 5;
var i=0;

while (i<rows2) {
  
  var asteriks = '*';
  var j = 1;
  
  while (j<i) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}


// LOOPING angka segitiga

// 12345
// 2345
// 345
// 45
// 5

var row = 5;

for (var i = 1; i <= row; i++) {
	var num = '';

	for (var j = i; j <= row; j++) {
		num += j;
	}
	console.log(num);
}

// 54321
// 5432
// 543
// 54
// 5

var row = 5;

for (var i = 1; i <= row; i++) {
	var num = '';
	for (var j = 5; j >= i; j--) {
		num += j;
	}
	console.log(num);
}

// 12345
// 1234
// 123
// 12
// 1
var row = 5;

for (var i = row; i >= 1; i--) {
	var tmp = '';

	for (var j = 1; j <= i; j++) {
		tmp += j;
	}
	console.log(tmp);
}




