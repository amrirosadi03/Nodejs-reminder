const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs"); // use ejs
app.use(expressLayouts); // Third-party Middleware
app.use(express.static("public")); //Build-in middleware
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  const inhabitant = [
    {
      name: "Amri Rosadi",
      email: "amriroxadi@gmail.com",
    },
    {
      name: "Islah",
      email: "islah@gmail.com",
    },
    {
      name: "Erfan",
      email: "erfan@gmail.com",
    },
  ];
  res.render("index", {
    name: "Amri Rosadi",
    title: "Home Page",
    inhabitant,
    layout: "layouts/main-layout",
  });
});

// About Page
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About Page",
  });
});

// Contact Page
app.get("/contact", async (req, res) => {
  //   Contact.find().then((contact) => {
  //     res.send(contact);
  //   });
  const contacts = await Contact.find();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact Page",
    contacts,
    msg: req.flash("msg"),
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening to http://localhost:${port}`);
});
