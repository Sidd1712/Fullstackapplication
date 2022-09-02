const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    username: { type: DataTypes.STRING },
  });
  return User;
};