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

console.log(Object.keys(obj));

console.log(Object.values(obj));

let owners = Object.fromEntries(
  Object.entries(obj).map((entry) => [entry[0], entry[1]])
);

console.log(owners);
