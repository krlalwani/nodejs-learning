const express = require("express");
const tourRouter = express.Router();
const tourController = require("./../controllers/tourControllers");

tourRouter
  .route("/")
  //.get(tourController.getAllTours)
  .post(tourController.postTour);

tourRouter.route("/getTours").post(tourController.getAllTours);

tourRouter.route("/getTour/:id").post(tourController.getTourById);
tourRouter.route("/getTourName").post(tourController.getTourByName); //name sent in json body

tourRouter.route("/updateTourRating").post(tourController.updateTour);
tourRouter.route("/createTour").post(tourController.createTour);

tourRouter.route("/getLatestTour").post(tourController.getLatestRecord);
tourRouter.route("/delLatestTour").post(tourController.deleteLatestRecord);

tourRouter.route("/download").post(tourController.postFile); //file download route

module.exports = tourRouter;
