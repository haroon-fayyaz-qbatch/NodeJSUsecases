const moment = require("moment");

const value = moment("20111031", "YYYYMMDD").fromNow();

console.log(value);

const currentDate = moment().format("MMMM dddd yyyy, h:mm:ss a");

console.log(currentDate);
const hrs = moment().startOf("hour").fromNow();

console.log(hrs);

const time = moment().endOf("day").fromNow();

console.log(time);

console.log(moment().locale());

console.log(moment().format("Its"));
