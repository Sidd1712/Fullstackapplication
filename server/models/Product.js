const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    desc: { type: DataTypes.TEXT },
    productId: { type: DataTypes.INTEGER },
    seller: { type: DataTypes.STRING },
    sellerId: { type: DataTypes.INTEGER }
  });
  return Product;


  
};