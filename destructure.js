let arr = [9, 4, 2];

[a, b, c] = arr;

console.log(`${a} ${b} ${c}`);

let obj = {
  owner1: {
    name: "haroon",
    age: 18,
  },
  owner2: {
    name: "ahmad",
    age: 32,
  },
  owner3: {
    name: "shakeel",
    age: 23,
  },
};

const { name: n, age: ag } = obj.owner1;

console.log(`${n} ${ag}`);

const {
  owner1: { name: na, age: age },
} = obj;

console.log(`${na} ${age}`);
