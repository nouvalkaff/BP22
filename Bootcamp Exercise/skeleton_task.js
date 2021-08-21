/**
 * Mampu menggabungkan konsep Conditional dan Iteration dalam kasus sederhana
 * Buat sebuah function yang bisa menerima parameter yang bisa melengkapi for loop.
 * function yang dibuat hanya bisa menerima tipe data angkaber
 * Buat pseudocode nya terlebih dahulu
 *
 * Owner: Fitra Hidayat
 */

//Menentukan bilangan ganjil & genap
for (let angka = 1; angka <= 10; angka++) {
  if (angka % 2 == 0) {
    // write your code here
    console.log(`${angka} : Angka Genap`);
  } else {
    console.log(`${angka} : Angka Ganjil`);
  }
}

console.log("--------------------------------------------");

//    //Kelipatan 3 dengan pertambahan index 2
for (let angka = 1; angka <= 10; angka += 2) {
  if (angka % 3 === 0) {
    //     // write your code here
    console.log(`${angka} adalah kelipatan 3`);
  } else {
    console.log(angka);
  }
}
// }

console.log("--------------------------------------------");

//  Menentukan faktor prima
let prime_factors = (angka, hasil = []) => {
  // write your code here
  let root = Math.sqrt(angka);
  let x = 2;

  if (angka % x) {
    x = 3;

    while (angka % x && (x = x + 2) < root) {}
  }

  x = x <= root ? x : angka;

  hasil.push(x);

  return x === angka ? hasil : prime_factors(angka / x, hasil);
};

const angka = 99;
console.log(`Faktor prima dari ${angka} adalah ${prime_factors(angka)}`);
