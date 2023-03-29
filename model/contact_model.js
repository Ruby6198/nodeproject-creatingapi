const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    gender: {
      type: String,
      required: [true, "Please add the gender"],
    },

    dob: {
        type: String,
        required: [true, "Please add the DOB"],
      },
      phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
      },
      age: {
        type: String,
        required: [true, "Please add the age"],
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);