// Synchronous

// const getUserSync = require("./src/getUserSync");

// const firstUser = getUserSync(1);
// console.log(firstUser);

// const secondUser = getUserSync(2);
// console.log(secondUser);

// const halo = "Hello World";
// console.log(halo);

// Asynchronous

const getUser = require("./src/getUser");

const firstUser = getUser(1, (user) => {
  console.log(user);
});

const secondUser = getUser(2, (user) => {
  console.log(user);
});

const halo = "Hello World";
console.log(halo);
