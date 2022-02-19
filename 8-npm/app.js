// const validator = require("validator");
import chalk from "chalk";

// email
// console.log(validator.isEmail("amri@gmail.com")); // true
// console.log(validator.isEmail("amri@gmail.c")); // false
// console.log(validator.isEmail("amrigmail.com")); // false

// phone/telp number
// console.log(validator.isMobilePhone("081917356787", "id-ID")); // true
// console.log(validator.isMobilePhone("81917356787", "id-ID")); // false

// Numeric /Number
// console.log(validator.isNumeric("81917356787")); // true

// console.log(validator.isNumeric("819a17356787")); // false

// chalk
// console.log(chalk.blue("Assalamualaikum"));
// console.log(chalk.italic.bold.black.bgWhite("Waalaikumsalam"));

const log = console.log;

// const message = chalk.blue("Hello") + " World" + chalk.red("!");
// // console.log(chalk.bgRed.black(message));
// console.log(message);

// log(chalk.green("I am a green line " + chalk.blue.underline.bold("with a blue substring") + " that becomes green again!"));

log(`
CPU: ${chalk.yellow.bgGreenBright("90%")}
RAM: ${chalk.green.strikethrough("40%")}
DISK: ${chalk.white("70%")}
`);
