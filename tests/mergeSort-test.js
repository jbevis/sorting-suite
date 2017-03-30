import { assert } from 'chai';
import mergeSort from '../scripts/mergeSort';
import { numberGenerator, compareNumbers, letterGenerator } from '../scripts/randomGenerators';

describe('Merge Sort', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should be able to sort an array of numbers', () => {
    let nums = [3, 1, 4, 2, 0];

    assert.deepEqual(mergeSort(nums), [0, 1, 2, 3, 4]);
  });

  it('should be able to sort an array of letters', () => {
    let letters = ['d', 'b', 'c', 'a'];

    assert.deepEqual(mergeSort(letters), ['a', 'b', 'c', 'd']);
  });

  it('should be able to sort an array of upper case letters', () => {
    let upperCase = ['D', 'B', 'A', 'C'];

    assert.deepEqual(mergeSort(upperCase), ['A', 'B', 'C', 'D']);
  });

  it('shoulbe be able to sort a random array of letters', () => {
    let randomLetters = letterGenerator(10);
    let randomLetters2 = randomLetters;

    assert.deepEqual(mergeSort(randomLetters), randomLetters2.sort());
  });

  it('should be able to sort an array of negative numbers', () => {
    let negNums = [-2, -1, -4, -3];

    assert.deepEqual(mergeSort(negNums), [-4, -3, -2, -1]);
  });

  it('should be able to sort duplicates', () => {
    let doubleNums = [4, 1, 4, 2, 3, 2, 1, 3];

    assert.deepEqual(mergeSort(doubleNums), [1, 1, 2, 2, 3, 3, 4, 4]);
  });

  it('should be able to sort a random array of numbers', () => {
    let randomNums = numberGenerator(1, 100, 10);

    assert.deepEqual(mergeSort(randomNums), randomNums.sort(compareNumbers));
  });

  it('should be able to sort a larger array of random numbers', () => {
    let randomNums = numberGenerator(1, 100, 100);

    assert.deepEqual(mergeSort(randomNums), randomNums.sort(compareNumbers));
  });

  it('should be able to sort a huge array of random numbers', () => {
    let randomNums = numberGenerator(1, 100, 140000);
    let randomNums2 = randomNums

    assert.deepEqual(mergeSort(randomNums), randomNums2.sort(compareNumbers));
  });

  it('should be able to sort a very large array of random negative numbers', () => {
    let randomNums = numberGenerator(-100, -1, 1000);
    let randomNums2 = randomNums

    assert.deepEqual(mergeSort(randomNums), randomNums2.sort(compareNumbers));
  });
})
