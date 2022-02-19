// const name = "Amri Rosadi";

// console.log(name);

// const printName = (name) => `Hi, my name is ${name}`;
// console.log(printName("Umar dan Umair"));
// const fs = require('fs'); // core module
// const printName = require("./coba"); // import local module
// const moment = require('moment'); // third pary module / npm module / node_modules

// console.log("Hello ubay!");

// const printName = require("./coba");

const coba = require("./coba");

console.log(coba.printName("Amri"), coba.PI, coba.students.printStudent(), new coba.People());
