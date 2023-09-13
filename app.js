const express = require("express");
const app = express();
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");

app.use(morgan("dev")); //morgan middleware for capturing req and res
app.use(express.json()); //middleware to modify incoming json requests

//app.get("/api/v1/tours", getAllTours);
//app.get("/api/v1/tours/:id", getTourById);
//app.post("/api/v1/tours", postTour);

//app.route("/api/v1/tours").get(getAllTours).post(postTour);
//app.route("/api/v1/tours/:id").get(getTourById);

app.use("/api/v1/tours", tourRouter);
app.use("/", tourRouter);

module.exports = app;
