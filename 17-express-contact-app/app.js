const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const { loadContact, findContact } = require("./utils/contacts");

const port = 3000;

app.set("view engine", "ejs"); // use ejs
app.use(expressLayouts); // Third-party Middleware
app.use(express.static("public")); //Build-in middleware

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

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About Page",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact Page",
    contacts,
  });
});
app.get("/contact/:name", (req, res) => {
  const contact = findContact(req.params.name);
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Details Contact Page",
    contact,
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
