import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';
import numberGenerator from '../scripts/numberGenerator'

describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it('should be able to sort an array of numbers', () => {
    let nums = [3, 1, 4, 2, 0];

    assert.deepEqual(insertionSort(nums), [0, 1, 2, 3, 4])
  })

  it('should be able to sort an array of letters', () => {
    let letters = ['d', 'a', 'b', 'c'];

    assert.deepEqual(insertionSort(letters), ['a', 'b', 'c', 'd'])
  })

  it('should be able to sort an arry of negative numbers', () => {
    let negNums = [-2, -1, -4, -3]

    assert.deepEqual(insertionSort(negNums), [-4, -3, -2, -1])
  })

  it('should be able to sort duplicates', () => {
    let doubleNums = [4, 1, 4, 2, 3, 2, 1, 3];

    assert.deepEqual(insertionSort(doubleNums), [1, 1, 2, 2, 3, 3, 4, 4])
  })

  it('should be able to sort a random array of numbers', () => {
    let randomNums = numberGenerator(1, 20, 10)

    assert.deepEqual(insertionSort(randomNums), randomNums.sort())
  })
})
