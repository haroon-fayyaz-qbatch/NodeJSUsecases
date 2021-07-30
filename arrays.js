let arr = [43, 232, 343, 54];
console.log("Adding the items: ");
let sum = 0;
arr.forEach((item) => {
  console.log(item + " ");
  sum += item;
});

console.log(`\nThe sum is: ${sum}`);

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const sub = arr.reduce((acc, item) => {
  console.log(`${acc} : ${item}`);
  return acc - item;
});

console.log(sub);

const filter = arr.filter((item) => {
  return item > 300;
});

console.log(filter);
const find = arr.find((item) => {
  return item > 23;
});

console.log(find);

arr.findIndex();
