
export const numberGenerator = (min, max, lengthN) => {
  let randomArray = [];

  for (let i = 0; i < lengthN; i ++) {
    randomArray.push(Math.floor(Math.random() * (max - min)) + min)
  }
  return randomArray;
}

export const compareNumbers = (a, b) => {
  return a - b;
}

export const letterGenerator = (length) => {
  let letterArr = [];
  let letters = "abcdefghijklmnopqrstuvwxyz";

  for ( let i = 0; i < length; i++ ) {
    letterArr.push(letters.charAt(Math.floor(Math.random() * letters.length)));
  }
  return letterArr;
}
