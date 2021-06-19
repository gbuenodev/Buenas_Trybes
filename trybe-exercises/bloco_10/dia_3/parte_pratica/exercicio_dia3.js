const generateRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const firstFunction = (str) => str.toUpperCase();

const secondFunction = (str) => str.charAt(0);

const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = { generateRandomNumber, firstFunction, secondFunction, thirdFunction };