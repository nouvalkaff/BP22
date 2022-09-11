const arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; //output --> 276
const arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];  //output --> 351

const hasilArr_1 = (arr) => {
    let sum = 0; for (let i of arr) sum += i; return sum;}
console.log('Sum arr_1 = ', hasilArr_1(arr_1));

const hasilArr_2 = (arr) => {
    let sum = 0; for (let i of arr) sum += i; return sum;}
console.log('Sum arr_2 = ', hasilArr_2(arr_2));

const sumTwoArray = (arr_1, arr_2) => {
    let sum = hasilArr_1(arr_1) + hasilArr_2(arr_2)
    return sum;}
console.log('sumTwoArray = ', sumTwoArray(arr_1, arr_2));
