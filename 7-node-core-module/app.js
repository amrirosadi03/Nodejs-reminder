//core module

//file system
const fs = require("fs");

// // write string to file syncrronously
// try {
//   fs.writeFileSync("data/test.txt", "Hello world secara synchrounous");
// } catch (e) {
//   console.log(e);
// }

// write string to file asyncrronously
// fs.writeFile("data/test.txt", "Hello World secara asynchronous", (e) => {
//   console.log(e);
// });

// read file syncrronously
// const data = fs.readFileSync("data/test.txt", "utf-8");

// console.log(data);

// read file asyncrronously
const data = fs.readFile("data/test.txt", "utf-8", (e, data) => {
  if (e) throw err;
  console.log(data);
});
