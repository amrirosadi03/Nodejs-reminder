//file system
const fs = require("fs");

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

//ambil semua data pada contact.json
const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

//ambil details contact berdasarkan nama(name)
const findContact = (name) => {
  const contacts = loadContact();
  const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
  return contact;
};

// menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

// menambahkan contact baru
const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

// cek nama yang duplikat
const checkDuplicate = (name) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.name === name);
};

// Hapus contact

const deleteContact = (name) => {
  const contacts = loadContact();
  const filteredConttacts = contacts.filter((contact) => contact.name !== name);
  saveContacts(filteredConttacts);
};

module.exports = { loadContact, findContact, addContact, checkDuplicate, deleteContact };
