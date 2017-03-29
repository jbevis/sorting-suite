const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let container = array[i]

    for (let j = i-1; j >= 0; j--) {
      if (container < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};


// const insertionSort = (array, sorted = []) => {
//   let container;
//
//   if (!array.length) {
//     return sorted
//   }
//   container = array.shift()
//
//   for (let i = sorted.length - 1; i >= 0; i--) {
//     if (container > sorted[i]) {
//       sorted.splice(i + 1, 0, container)
//       insertionSort(array, sorted)
//       return sorted
//     }
//   }
//   sorted.splice(0, 0, container)
//   insertionSort(array, sorted)
//   return sorted
// }

export default insertionSort;
