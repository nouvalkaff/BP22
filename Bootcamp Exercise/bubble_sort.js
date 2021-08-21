const arr = [10, -1, 2, 5, 0, 6, 4, -5];
function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
      let swap = true;
          for (let j=0; j<arr.length-1; j++) {
              if (arr[j] > arr[j+1]) {
              swap = true;
              let wadah = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = wadah;

              }
          }
      if (swap === false) {break}
  }
  return arr;
}
console.log('Hasil (Ascending): ', bubbleSort(arr));