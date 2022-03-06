const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/amri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// // Menambah 1 data
// const contact1 = new Contact({
//   name: "Andriani Ap",
//   phone: "08191784777",
//   email: "andriani@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
