// let arr = [43, 232, 343, 54];
// console.log("Adding the items: ");
// let sum = 0;
// arr.forEach((item) => {
//   console.log(item + " ");
//   sum += item;
// });

// console.log(`\nThe sum is: ${sum}`);

// // console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const sub = arr.reduce((acc, item) => {
//   console.log(`${acc} : ${item}`);
//   return acc - item;
// });

// console.log(sub);

// const filter = arr.filter((item) => {
//   return item > 300;
// });

// console.log(filter);
// const find = arr.find((item) => {
//   return item > 23;
// });

// console.log(find);

var wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

let hufflepuff = wizards.reduce((newArr, wizard) => {
  newArr.push(wizard.name.toLowerCase());
  return newArr;
}, []);

console.log(hufflepuff);

sampleArr = [];
for (let i = 0; i < 101; i++) {
  sampleArr.push(i);
}

console.log(JSON.stringify(sampleArr));

var jsonObject = {
  owner1: {
    roomSize: [32, 23, 21],
  },
  owner2: {
    roomSize: [43, 20, 12],
  },
  owner3: {
    roomSize: [98, 21, 2],
  },
};

for (let key in jsonObject) {
  console.log(jsonObject[key].roomSize);
}

//clone an array of objects
cloneA = sampleArr.slice();
