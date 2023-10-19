// swaggerConfig.js

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0", // Specify the OpenAPI version
    info: {
      title: "Your API Documentation",
      version: "1.0.0",
      description: "API documentation for your Node.js application",
    },
  },
  apis: ["./../routes/*.js"], // Specify the path to your route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
