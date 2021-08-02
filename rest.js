const { multiply } = require("lodash");
const mult = (...args) => {
  return args.reduce((acc, value) => {
    return acc * value;
  });
};

console.log(mult(9, 6, 3));
