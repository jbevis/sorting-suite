const bubbleSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    // console.log(array)
    if (array[i-1] > array[i]) {
      let container = array[i]

      array[i] = array[i-1]
      array[i-1] = container
      bubbleSort(array)
    }
  }
  return array
}

export default bubbleSort;
