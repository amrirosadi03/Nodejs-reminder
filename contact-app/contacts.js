//file system
const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path/posix");
const chalk = require("chalk");
const validator = require("validator");

//membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const saveContact = (name, email, phone) => {
  const contact = { name, email, phone };
  // const file = fs.readFileSync("data/contacts.json", "utf-8");
  // const contacts = JSON.parse(file);

  const contacts = loadContact();

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.name === name);

  if (duplikat) {
    console.log(chalk.red.inverse.bold("Contact has been registered, use other name!"));
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email is not valid"));
      return false;
    }
  }

  //cek phone number
  if (!validator.isMobilePhone(phone, "id-ID")) {
    console.log(chalk.red.inverse.bold("Your phone number is not valid"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.greenBright.inverse.bold("Thank you for your input."));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyanBright.inverse.bold("Contacts list : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.name} - ${contact.phone}`);
  });
};

const detailsContact = (name) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${name} does not found!`));
    return false;
  }

  console.log(chalk.cyanBright.inverse.bold(contact.name));
  console.log(chalk.cyanBright.inverse.bold(contact.phone));
  if (contact.email) {
    console.log(chalk.cyanBright.inverse.bold(contact.email));
  }
};

// menghapus contact berdasarkan nama
const deleteContact = (name) => {
  const contacts = loadContact();
  const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());
  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${name} does not found!`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(chalk.greenBright.inverse.bold(`${name} has been deleted`));
};

module.exports = { saveContact, listContact, detailsContact, deleteContact };
