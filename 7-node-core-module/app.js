//core module

//file system
const fs = require("fs");

// // write string to file syncrronously
// try {
//   fs.writeFileSync("data/contacts.json", "Hello world secara synchrounous");
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
// const data = fs.readFile("data/test.txt", "utf-8", (e, data) => {
//   if (e) throw err;
//   console.log(data);
// });
// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please input your name : ", (name) => {
  rl.question("Please input your phone number : ", (phone) => {
    const contact = { name, phone };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Thank you for your input.");

    rl.close();
  });
});
