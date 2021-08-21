const angka = [10, -1, 2, 5, 0, 6, 4, -5];

//bagian kanan dan kiri disortir
const merge = (leftSide, rightSide) => {
  //buat variable kosong dan buat variable untuk menetapkan masing2 index bagian kanan dan kiri ke 0
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  //membuat kodisi ketika index masih dibawah length, looping masih terjadi
  while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
    const leftElement = leftSide[leftIndex];
    const rightElement = rightSide[rightIndex];

    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
  }
  return [...output, ...leftSide.slice(leftIndex), ...rightSide.slice(rightIndex)]
}

function mergeSort (angka) {
//buat edge case
  if (angka.length < 2) {
    return angka;
  }
  //mulai dibelah perbagian kanan dan kiri
  const dividedIndex = Math.floor(angka.length/2);
  const leftSide = angka.slice(0, dividedIndex);
  const rightSide = angka.slice(dividedIndex);

  //recursion dari fungsi mergeSort() untuk masing2 dalam fungsi merge()
  return merge(
    mergeSort(leftSide), mergeSort(rightSide)
  );
};
console.log(mergeSort(angka));
