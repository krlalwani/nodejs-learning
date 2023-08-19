const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json()); //middleware to modify incoming json requests
//server listen
app.listen(port, () => {
  console.log("Server Listening started on port ", port);
});

const tours = JSON.parse(fs.readFileSync("./tours-simple.json", "utf-8"));

app.get("/api/v1/tours", (req, res) => {
  console.log("inside get funcdtion tours");
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log("inside get function tours");
  console.log(req.params);
  console.log(typeof tours);
  const id = req.params.id * 1; //convert id received in params in string to number
  const tour = tours.find((el) => el.id === id);
  console.log(tour);
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  res.end("Done");
});
