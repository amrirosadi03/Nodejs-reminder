const contacts = require("./contacts");

const main = async () => {
  const name = await contacts.writeQuest("Please input your name : ");
  const email = await contacts.writeQuest("please input your email : ");
  const phone = await contacts.writeQuest("please input your phone number : ");

  contacts.saveContact(name, email, phone);
};

main();
