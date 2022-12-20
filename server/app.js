const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");
const UserController = require("./controllers/UserController");
const ProductController = require("./controllers/ProductController");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/createUser", UserController.create);
app.post("/login", UserController.login);
app.get("/products", ProductController.getAll);
app.get("/products/:id", ProductController.getById);
app.put("/products/:id", ProductController.update);
app.delete("/products/:id", ProductController.delete);
app.post("/createProduct", ProductController.create);


sequelize
  .sync()
  .then(() => {
    app.listen(8081);
    console.log("Server started");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
