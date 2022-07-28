const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  message: String,
});

const ContactModel = mongoose.model("ContactResponses", ContactSchema);

module.exports = { ContactModel };
