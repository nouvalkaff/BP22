function in_words(angka) {
    const satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    const puluhan = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
    const ratusan = ['', 'satu ratus', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus',
    'delapan ratus', 'sembilan ratus'];
    const ribuan = ['', 'satu ribu', 'dua ribu', 'tiga ribu', 'empat ribu', 'lima ribu', 'enam ribu', 'tujuh ribu', 'delapan ribu', 'sembilan ribu'];

    var angkaString = angka.toString();
    console.log(angkaString);

    if (angka < 0) {
        throw new Error ("Angka tidak bisa minus");
    }

    if (angka === 0) {
        console.log("Nol");
    }

    //Bagian satuan, angka 1-9
    if (angka <= 20) {
        return satuan[angka];
    }

    //Bagian puluhan, angka 20 - 99
    if (angkaString.length === 2) {
        return puluhan[angkaString[0]] + ' ' + satuan[angkaString[1]];
    }

    //Bagian ratusan, angka 100 - 999
    if (angkaString.length === 3) {
        if (angkaString[1] === "0" && angkaString[2] === "0"){
        return ratusan[angkaString[0]];
            }else {
                return ratusan[angkaString[0]] + ' ' + puluhan[angkaString[1]] + ' ' + satuan[angkaString[2]];
            }
        }

    if (angkaString.length === 4) {
        if (angkaString[1] === "0" && angkaString[2] === "0" && angkaString[3] === "0") {
            return ribuan[angkaString[0]]
        } else {return ribuan[angkaString[0]] + ' '+ ratusan[angkaString[1]] + ' '
        + puluhan[angkaString[2]] + ' ' + satuan[angkaString[3]]
            
        }
    }

  }
  // Driver code
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(in_words(4)); console.log('~~~~~~~~~~~~~~~~~~~~'); // empat 
console.log(in_words(11)); console.log('~~~~~~~~~~~~~~~~~~~~~~'); // sebelas
console.log(in_words(27)); console.log('~~~~~~~~~~~~~~~~~~~~~~~~'); // dua puluh tujuh
console.log(in_words(104)); console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~'); // satu ratus lempat
console.log(in_words(156)); console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); // satu ratus lima puluh enam
console.log(in_words(5987)); console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');// lima ribu sembilan ratus delapan puluh tujuh
