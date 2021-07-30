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

const objStr = JSON.stringify(obj);

console.log(objStr);

console.log(JSON.parse(objStr));

const replacer = (key, value) => {
  console.log(typeof value);
  if (key === "age") return undefined;
  return value;
};

const userStr = JSON.stringify(obj, replacer);

console.log(userStr);
