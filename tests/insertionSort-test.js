import { assert } from 'chai';
import insertionSort from '../scripts/insertionSort';
import { numberGenerator, compareNumbers, letterGenerator } from '../scripts/randomGenerators';

describe('Insertion Sort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should be able to sort an array of numbers', () => {
    let nums = [3, 1, 4, 2, 0];

    assert.deepEqual(insertionSort(nums), [0, 1, 2, 3, 4]);
  });

  it('should be able to sort an array of letters', () => {
    let letters = ['d', 'a', 'b', 'c'];

    assert.deepEqual(insertionSort(letters), ['a', 'b', 'c', 'd']);
  });

  it('should be able to sort an array of upper case letters', () => {
    let upperCase = ['D', 'B', 'A', 'C'];

    assert.deepEqual(insertionSort(upperCase), ['A', 'B', 'C', 'D']);
  });

  it('shoulbe be able to sort a random array of letters', () => {
    let randomLetters = letterGenerator(10);
    let randomLetters2 = randomLetters;

    assert.deepEqual(insertionSort(randomLetters), randomLetters2.sort());
  });

  it('should be able to sort an arry of negative numbers', () => {
    let negNums = [-2, -1, -4, -3];

    assert.deepEqual(insertionSort(negNums), [-4, -3, -2, -1]);
  });

  it('should be able to sort duplicates', () => {
    let doubleNums = [4, 1, 4, 2, 3, 2, 1, 3];

    assert.deepEqual(insertionSort(doubleNums), [1, 1, 2, 2, 3, 3, 4, 4]);
  });

  it('should be able to sort a random array of numbers', () => {
    let randomNums = numberGenerator(1, 100, 10);

    assert.deepEqual(insertionSort(randomNums), randomNums.sort(compareNumbers));
  });

  it('should be able to sort a larger array of random numbers', () => {
    let randomNums = numberGenerator(1, 100, 100);

    assert.deepEqual(insertionSort(randomNums), randomNums.sort(compareNumbers));
  });

  it('should be able to sort a huge array of random numbers', () => {
    let randomNums = numberGenerator(1, 100, 20000);
    let randomNums2 = randomNums

    assert.deepEqual(insertionSort(randomNums), randomNums2.sort(compareNumbers));
  });

  it('should be able to sort a very large array of random negative numbers', () => {
    let randomNums = numberGenerator(-100, -1, 1000);
    let randomNums2 = randomNums

    assert.deepEqual(insertionSort(randomNums), randomNums2.sort(compareNumbers));
  });
})
