##Sorting Suite

###Synopsis

This project is part of the Turing School of Software and Design's Front-end Engineering program for mod 2. I was tasked with writing three sorting algorithms and corresponding testing suites. Bubble sort, insertion sort, and merge sort.

All files are written in ES6, and I also included a file of helper functions to generate random arrays of numbers and letters respectively to test the alogrithms iterating over long arrays.

###Code Example:

```
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
```
