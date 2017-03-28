let randomArray = [];

const numberGenerator = (min, max, lengthN) => {
  for (let i = 0; i < lengthN; i ++) {
    randomArray.push(Math.floor(Math.random() * (max - min)) + min)
  }
  return randomArray;
}

export default numberGenerator;
