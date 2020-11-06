//saying use installed mongoose software to 
//create or updates already made database

const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/NobelPrizes', { useNewUrlParser: true })

mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/NobelPrizes";
  }

module.exports = mongoose