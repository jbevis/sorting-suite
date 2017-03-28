import { assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import numberGenerator from '../scripts/numberGenerator'


describe('bubbleSort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  })

  it('should be able to sort an array of numbers', () => {
    let nums = [5, 3, 1, 4, 2, 0];

    assert.deepEqual(bubbleSort(nums), [0, 1, 2, 3, 4, 5])
  })

  it('should be able to sort an array of letters', () => {
    let letters = ['d', 'b', 'c', 'a'];

    assert.deepEqual(bubbleSort(letters), ['a', 'b', 'c', 'd'])
  })

  it('should be able to sort an arry of negative numbers', () => {
    let negNums = [-2, -1, -4, -3]

    assert.deepEqual(bubbleSort(negNums), [-4, -3, -2, -1])
  })

  it('should be able to sort duplicates', () => {
    let doubleNums = [4, 1, 4, 2, 3, 2, 1, 3];

    assert.deepEqual(bubbleSort(doubleNums), [1, 1, 2, 2, 3, 3, 4, 4])
  })

  it('should be able to sort a random array of numbers', () => {
    let randomNums = numberGenerator(1, 20, 10)

    assert.deepEqual(bubbleSort(randomNums), randomNums.sort())
  })
})
