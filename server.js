const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); //type of config props file for storing env details and passwords
const app = require("./app.js");

//console.log(process.env);
const port = process.env.PORT;
const DBPasswd = encodeURIComponent(process.env.DB_PASSWD); //replace % or @ in string with %40 type of values.
const DB = process.env.DB_URI.replace("<PASSWORD>", DBPasswd).replace(
  "<DB>",
  process.env.DB_NAME
);
//console.log(DB);
//mongoose.set("bufferCommands", false);

async function run() {
  console.log("Inside run");
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log("Connection Successful");
      //console.log(conn.connections);
    })
    .catch((err) => {
      console.log("ERROR " + err);
    });
}

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: true },
});
const Tour = mongoose.model("Tours", tourSchema);

const testTour = new Tour({
  name: "Kumar Lalwanis",
  //rating: 5.87,
  price: 5555,
});

run().then(() => {
  testTour
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log("Inside Test Tour CATCH.........");
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("Server Listening started on port ", port);
});
