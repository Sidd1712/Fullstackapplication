const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");
var fs = require("fs");
var path = require("path");
const UserController = require("./controllers/UserController");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/createUser", UserController.create);

sequelize
  .sync()
  .then(() => {
    app.listen(8081);
    console.log("Server started");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
