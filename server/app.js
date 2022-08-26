const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");
const config = require("./config");
const UserController = require("./controllers/UserController");

const app = express();
app.use(cors());

app.post("/createUser", UserController.createUser);

sequelize.sync().then(() => {
  app.listen(8081);
  console.log("Server started");
});
