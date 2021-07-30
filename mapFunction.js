const divide = (num) => {
  return num / 10;
};

const numbers = [32, 35, 31, 65];
const newArr = numbers.map(divide);

console.log(newArr);

console.log(numbers.includes(35));
