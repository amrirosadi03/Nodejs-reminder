//file system
const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path/posix");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

const writeQuest = (quest) => {
  return new Promise((resolve, reject) => {
    rl.question(quest, (name) => {
      resolve(name);
    });
  });
};

const saveContact = (name, email, phone) => {
  const contact = { name, email, phone };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Thank you for your input.");

  rl.close();
};

module.exports = { writeQuest, saveContact };
