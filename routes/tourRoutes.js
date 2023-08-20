const express = require("express");
const tourRouter = express.Router();
const tourController = require("./../controllers/tourControllers");

tourRouter
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.postTour);

tourRouter.route("/:id").get(tourController.getTourById);

module.exports = tourRouter;
