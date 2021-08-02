let arr = [9, 4, 2];

[a, b, c] = arr;

console.log(`${a} ${b} ${c}`);

let obj = {
  owner1: {
    name: "haroon",
    age: 18,
    roomSize: [34, 4, 3],
  },
  owner2: {
    name: "ahmad",
    age: 32,
    roomSize: [3, 51, 65],
  },
  owner3: {
    name: "shakeel",
    age: 23,
    roomSize: [324, 54, 32],
  },
};

const { name: n, age: ag } = obj.owner1;

console.log(`${n} ${ag}`);

const {
  owner1: { name: na, age: age },
} = obj;

console.log(`${na} ${age}`);

const { name, roomSize: rS } = obj.owner1;

console.log(`${name} ${rS}`);

console.log(...rS);
