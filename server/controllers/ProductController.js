const { Product } = require("../models/index");

module.exports = {
  async create(req, res) {
    const addedProduct = req.body;
    // Validate request
    if (!addedProduct) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    try {
      const product = await Product.create(addedProduct);
      const productJSON =product.toJSON();
      res.send({product:productJSON });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "couldnt create the product",
      });
    }
  },
  async getAll(req, res) {
    
    
    try {
      const products = await Product.findAll();
      // const productJSON =products.toJSON();
      res.send(products);
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "couldn't get the products.",
      });
    }
  },
  async getById(req, res) {
    
    
    try {
      const product = await Product.findOne({where:req.params.productId});
      // const productJSON =products.toJSON();
      res.send(product);
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "couldn't get the product.",
      });
    }
  },
};
