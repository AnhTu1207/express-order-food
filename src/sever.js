const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

global.appRoot = path.resolve(__dirname);
const { sequelizeConfig } = require(appRoot + "/config");
const { RequireAuth } = require(appRoot + "/middlewares");
const { specs, swaggerUI } = require(appRoot + "/document");
const { authRoutes, userRoutes } = require(appRoot + "/routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/api/auth", authRoutes);
app.use("/api/users", RequireAuth, userRoutes);
app.use("/document-api", swaggerUI.serve, swaggerUI.setup(specs));


app.listen(PORT, () => {
  console.log("Sever is running at port: ", PORT);
});

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log("Connect database successful");
    return sequelizeConfig.sync();
  })
  .then(() => {
    console.log("Created tables in database");
  })
  .catch((e) => {
    console.log("Error! Can not connect to database", e);
  });
