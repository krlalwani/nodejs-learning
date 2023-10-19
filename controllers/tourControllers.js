//const fs = require("fs");
//const tours = JSON.parse(fs.readFileSync("./tours-simple.json", "utf-8"));
const { SchemaTypeOptions } = require("mongoose");
const tours = require("./../models/tourModel");
const axios = require("axios"); //for calling external api

exports.getAllTours = async (req, res) => {
  console.log("inside getAllTours function tours");
  const allTours = await tours.find();
  console.log(allTours);
  res.status(200).json({
    status: "success",
    results: allTours.length,
    data: allTours,
  });
};

exports.getTourById = async (req, res) => {
  console.log("inside getTour function ");
  //console.log(req.params);
  //console.log(typeof tours);
  //const id = req.params.id * 1; //convert id received in params in string to number
  const tourId = await tours.findById(id);
  res.status(200).json({
    status: "success",
    results: 1,
    data: tourId,
  });
};

exports.getTourByName = async (req, res) => {
  const name = req.body.name;
  let tour = await tours.find({ name: name }).exec(); //exact name match
  console.log(tour.length);
  if (tour.length === 0) {
    const regex = new RegExp(name, "i");
    tour = await tours.find({ name: regex }).exec(); //LIKE match
  }
  res.status(200).json({
    status: "success",
    results: 1,
    data: tour,
  });
};

exports.updateTour = async (req, res) => {
  const name = req.body.name;
  const tour = await tours.findOneAndUpdate(
    { name: name },
    { rating: req.body.rating },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    results: 1,
    data: tour,
  });
};

exports.createTour = async (req, res) => {
  const tour = req.body;
  await tours.create(tour);
  res.status(200).json({
    status: "Success",
  });
};

exports.getLatestRecord = async (req, res) => {
  const tour = await tours.findOne({}).sort({ createdAt: -1 }).limit(1).exec();
  res.status(200).json({
    status: "acknowledged",
    results: 1,
    data: tour,
  });
  // simulating a call back url mechanism
  setTimeout(() => {
    console.log("Timeout completed.");
    const apiUrl = "http://127.0.0.1:3000/delLatestTour";
    //this.deleteLatestRecord();
    axios.post(apiUrl, tour).then((res) => {
      console.log(res.data);
    });
  }, 25000); // 25000 milliseconds (25 seconds)
};

exports.deleteLatestRecord = async (req, res) => {
  //configured as callback url / webhook
  await tours.deleteOne(req.body);
  res.status(200).json({
    status: "deleted",
  });
};

exports.postTour = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "Success",
  });
};

exports.postFile = (req, res) => {
  res.setHeader("Content-Type", "application/file");
  const filePath = "swaggerConfig.js";
  res.sendFile(filePath, { root: __dirname });
  res.status(200).json({
    status: "Success",
  });
};
