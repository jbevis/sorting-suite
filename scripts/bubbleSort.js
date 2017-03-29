const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]]
      }
    }
  }
  return array
}


// const bubbleSort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     // console.log(array)
//     if (array[i-1] > array[i]) {
//       let container = array[i]
//
//       array[i] = array[i-1]
//       array[i-1] = container
//       bubbleSort(array)
//     }
//   }
//   return array
// }

export default bubbleSort;
