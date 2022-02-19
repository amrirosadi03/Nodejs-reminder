// console.log("Hello World!");

function printName(name) {
  return `Hi, my name is ${name}`;
}

const PI = 3.14; // export variabel

const students = {
  name: "Ubaidillah",
  age: 4,
  printStudent() {
    return `Halo, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

class People {
  constructor() {
    console.log("People that has been made!!");
  }
}

// module.exports.printName = printName;
// module.exports.PI = PI;
// module.exports.students = students;
// module.exports.People = People;

// module.exports = {
//   printName: printName,
//   PI: PI,
//   students: students,
//   People: People,
// };

module.exports = { printName, PI, students, People };
