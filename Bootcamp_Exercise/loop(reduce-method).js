var arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; //output --> 276
var arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];  //output --> 351

function tambahArr_1 () {
  console.log('Hasil arr_1 = ', arr_1.reduce((a, b) => a + b)); console.log('~~~~~~~~~~~');
  return tambahArr_1;
  } tambahArr_1(); //output --> 276

function tambahArr_2 () {
  console.log('Hasil arr_2 = ', arr_2.reduce((a, b) => a + b)); console.log('~~~~~~~~~~~');
  return tambahArr_2;
  } tambahArr_2(); //output --> 351

let hasil1 = arr_1.reduce((a,b) => a + b);
let hasil2 = arr_2.reduce((a,b) => a + b);
function sumTwoArray(hasil1, hasil2) {return hasil1 + hasil2;} //output --> 627
console.log('Hasil 2 array = ', sumTwoArray(hasil1, hasil2)); console.log('~~~~~~~~~~~~~');
