// Synchronous

// const getUserSync = (id) => {
// let name = '';
// if (id === 1) {
//     name = 'Amri';
// } else {
//     name = 'Rosadi';
// }
// return { id, name}

//   const name = id === 1 ? "Amri" : "Rosadi";
//   return { id, name };
// };

// const firstUser = getUserSync(1);
// console.log(firstUser);

// const secondUser = getUserSync(2);
// console.log(secondUser);

// const halo = "Hello World";
// console.log(halo);

// Asynchronous

const getUser = (id, cb) => {
  const time = id === 1 ? 3000 : 2000;
  setTimeout(() => {
    const name = id === 1 ? "Amri" : "Rosadi";
    cb({ id, name });
  }, time);
};

const firstUser = getUser(1, (user) => {
  console.log(user);
});

const secondUser = getUser(2, (user) => {
  console.log(user);
});

const halo = "Hello World";
console.log(halo);
