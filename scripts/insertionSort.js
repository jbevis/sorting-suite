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

export default insertionSort;
