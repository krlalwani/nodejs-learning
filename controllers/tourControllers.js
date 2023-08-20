const fs = require("fs");
const tours = JSON.parse(fs.readFileSync("./tours-simple.json", "utf-8"));

exports.getAllTours = (req, res) => {
  console.log("inside getAllTours function tours");
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
};
exports.getTourById = (req, res) => {
  console.log("inside getTour function ");
  //console.log(req.params);
  //console.log(typeof tours);
  const id = req.params.id * 1; //convert id received in params in string to number
  const tour = tours.find((el) => el.id === id);
  //console.log(tour);
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.postTour = (req, res) => {
  console.log(req.body);
  res.end("Done");
};
