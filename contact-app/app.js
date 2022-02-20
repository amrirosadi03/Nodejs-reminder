const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "full name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string",
    },
    phone: {
      describe: "Phone Number",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    contacts.saveContact(argv.name, argv.email, argv.phone);
  },
});

yargs.parse();
