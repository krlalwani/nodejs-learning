// Import the mongoose library
const mongoose = require("mongoose");

// Define the MongoDB connection URL
const mongoURI =
  "mongodb+srv://kumarlalwani:4f05mMpZvNLIqfzn@krl-cluster0.rutdjcp.mongodb.net/";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Close the MongoDB connection when the Node.js process exits
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

// Define your Mongoose models and application logic below

// Example model definition
// const Schema = mongoose.Schema;
// const exampleSchema = new Schema({
//   name: String,
//   age: Number,
// });
// const ExampleModel = mongoose.model('Example', exampleSchema);

// Start your application logic here
