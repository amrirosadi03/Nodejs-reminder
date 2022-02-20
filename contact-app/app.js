const yargs = require("yargs");
const contacts = require("./contacts");

yargs
  .command({
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
  })
  .demandCommand();

// menampilkan daftar semua name dan phone contact
yargs.command({
  command: "list",
  describe: "show list all contact name and phone",
  handler() {
    contacts.listContact();
  },
});

// menampilkan details sebuah contact
yargs.command({
  command: "details",
  describe: "show Details of a contact based on name",
  builder: {
    name: {
      describe: "full name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailsContact(argv.name);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "delete a contact based on the name",
  builder: {
    name: {
      describe: "full name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.name);
  },
});

yargs.parse();
