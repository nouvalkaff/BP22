const angka = [10, -1, 2, 5, 0, 6, 4, -5];

const quickSort = angka => {

  //buat edge case
  if (angka.length < 2) {
    return angka;
  }

  //prepare pivot, wadah kanan, wadah kiri
  const pivot = angka[angka.length-1];
  const leftArr = [];
  const rightArr = [];

  //buat looping sampai length angka -1. Ketika element/index kurang dari pivot, maka dorong ke wadah kiri, jika lebih besar dari pivot maka dorong ke wadah kanan.
    for (const element of angka.slice(0, angka.length-1)){
      element < pivot ? leftArr.push(element) : rightArr.push(element);
    }

  //Jika wadah kiri dan kanan ada isi, kembalikan nilai wadah kiri disort - pivot - wadah kanan disort
  if (leftArr.length > 0 && rightArr.length > 0) {
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

  //Jika hanya wadah kiri yang ada isi, kembalikan nilai wadah kiri yang sudah di quicksort - pivot.
  } else if (leftArr.length > 0) {
  return [...quickSort(leftArr), pivot];

  //selain dari 2 kondisi diatas kembalikan nilai pivot - wadah kanan disort
  } else {
  return [pivot, ...quickSort(rightArr)];
  }

}

//tampilkan hasil
console.log(quickSort(angka));
