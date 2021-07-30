// Functions to take an object and display user data from it

const display = (obj) => {
  for (const key in obj) {
    console.log(`Key: ${key}, Name: ${obj[key].name}, Age: ${obj[key].age}`);
  }
};

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

display(obj);
