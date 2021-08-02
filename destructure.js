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

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

// Observe how mix of object and array destructuring is being used here
// We are assigning 5 variables: name, country, city, lat, lng
const {
  name: nam,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${nam} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
