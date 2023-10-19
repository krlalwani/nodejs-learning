const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); //type of config props file for storing env details and passwords

//console.log(process.env);

const DBPasswd = encodeURIComponent(process.env.DB_PASSWD); //replace % or @ in string with %40 type of values.
const DB = process.env.DB_URI.replace("<PASSWORD>", DBPasswd).replace(
  "<DB>",
  process.env.DB_NAME
);

//const Tour = require("./../models/tourModel");
//console.log(DB);
//mongoose.set("bufferCommands", false);

async function connectDB() {
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection Success!!");
    });
}

module.exports = connectDB;
