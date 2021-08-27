const express = require("express");
const morgan = require("morgan");
const path = require("path");

require("dotenv").config();
global.appRoot = path.resolve(__dirname);
const { sequelizeConfig } = require(appRoot + "/config");

const { authRoutes } = require(appRoot + "/routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Sever running at port: ", PORT);
});

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log("Connect Database successful");
    return sequelizeConfig.sync();
  })
  .then(() => {
    console.log("Created tables in database");
  })
  .catch((e) => {
    console.log("Error! Can not connect database", e);
  });
