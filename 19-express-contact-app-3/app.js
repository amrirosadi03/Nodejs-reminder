const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const { loadContact, findContact, addContact, checkDuplicate, deleteContact, updateContacts } = require("./utils/contacts");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const port = 3000;

app.set("view engine", "ejs"); // use ejs
app.use(expressLayouts); // Third-party Middleware
app.use(express.static("public")); //Build-in middleware
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

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
    msg: req.flash("msg"),
  });
});

// Halaman form tambah data contact
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Add Contact Form",
    layout: "layouts/main-layout",
  });
});

// proses data contact
app.post(
  "/contact",
  [
    body("name").custom((value) => {
      const duplicate = checkDuplicate(value);
      if (duplicate) {
        throw new Error(" Name has been used!");
      }
      return true;
    }),
    check("email", "Email invalid!").isEmail(),
    check("phone", "Phone number not valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Add Contact Form",
        layout: "layouts/main-layout",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      //kirimkan flash message
      req.flash("msg", "Contact has been added!");
      res.redirect("/contact");
    }
  }
);

// proses delete contact
app.get("/contact/delete/:name", (req, res) => {
  const contact = findContact(req.params.name);

  // jika contact tidak ada
  if (!contact) {
    res.status(404);
    res.send("<h1>404</h1>");
  } else {
    deleteContact(req.params.name);
    req.flash("msg", "Contact has been deleted!");
    res.redirect("/contact");
  }
});

// Halaman form update data contact
app.get("/contact/update/:name", (req, res) => {
  const contact = findContact(req.params.name);

  res.render("update-contact", {
    title: "Update Contact Form",
    layout: "layouts/main-layout",
    contact,
  });
});

// proses ubah data
app.post(
  "/contact/update",
  [
    body("name").custom((value, { req }) => {
      const duplicate = checkDuplicate(value);
      if (value !== req.body.oldName && duplicate) {
        throw new Error(" Name has been used!");
      }
      return true;
    }),
    check("email", "Email invalid!").isEmail(),
    check("phone", "Phone number not valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("update-contact", {
        title: "Update Contact Form",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body,
      });
    } else {
      updateContacts(req.body);
      //kirimkan flash message
      req.flash("msg", "Contact has been updated!");
      res.redirect("/contact");
    }
  }
);

// Halaman detail contact
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
