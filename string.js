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