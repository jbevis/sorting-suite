const insertionSort = (array, sorted = []) => {
  let container;

  if (!array.length) {
    return sorted
  }
  container = array.shift()

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (container > sorted[i]) {
      sorted.splice(i + 1, 0, container)
      insertionSort(array, sorted)
      return sorted
    }
  }
  sorted.splice(0, 0, container)
  insertionSort(array, sorted)
  return sorted
}

export default insertionSort;
