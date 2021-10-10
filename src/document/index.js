const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const PORT = process.env.PORT || 8080;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FOOD GURU - BACKEND API",
      version: "1.0.0",
      description: "DOCUMENT OF FOOD GURU",
    },
    servers: [
      {
        url: process.env.HOST_URL,
      },
    ],
  },
  apis: ["./src/document/*.js"],
};

const specs = swaggerJSDoc(options);
module.exports = {
  specs,
  swaggerUI,
};
