const Sequelize = require("sequelize");
const config = require("../config");

const path = require("path");

const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize = sequelize; // This will allow us to access the sequelize object if we use this module
db.Sequelize = Sequelize; // This will allow us to access the Sequelize class if we use this module
exports.User = db.User = require(path.join(__dirname, "./User"))(
  sequelize,
  Sequelize
);
// db.Product = require(path.join(__dirname, "./Product"))(sequelize, Sequelize);

module.exports = db;
