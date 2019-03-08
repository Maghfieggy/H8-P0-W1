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