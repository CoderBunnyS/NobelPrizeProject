//saying use installed mongoose software to 
//create or updates already made database

const mongoose = require("mongoose")



mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/NobelPrizes";
  }

  mongoose.connect(mongoURI, { useNewUrlParser: true })

module.exports = mongoose