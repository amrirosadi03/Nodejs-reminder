const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// use ejs
app.set("view engine", "ejs");

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));

//Build-in middleware
app.use(express.static("public"));

//application level-middleware
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
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
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", {
    layout: "layouts/main-layout",
    title: "About Page",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contact Page",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID :  ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
