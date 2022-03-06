const mongoose = require("mongoose");

// membuat schema
const Contact = mongoose.model("Contact", {
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

module.exports = Contact;
