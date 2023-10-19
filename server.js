const app = require("./app.js");
const dev = require("./dev-config.js");
const port = process.env.PORT;

dev();

app.listen(port, () => {
  console.log("Server Listening started on port ", port);
});
