const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); //type of config props file for storing env details and passwords

const app = require("./app.js");

console.log(process.env);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server Listening started on port ", port);
});
