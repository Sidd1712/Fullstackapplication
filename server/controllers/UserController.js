const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const config = require("../config");

function jwtSignUser(user) {
  const tokenExpiryTime = 60 * 60 * 24 * 7; // One week till the token expirers
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: tokenExpiryTime,
  }); // Creates the token and signs it with the app secrete stored in config
}

module.exports = {
  async create(req, res) {
    const email = req.body;
    // Validate request
    if (!email) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    try {
      console.log("email", email);
      const user = await User.create(email);
      console.log("user", user);
      const userJSON = user.toJSON();
      res.send({ user: userJSON, token: jwtSignUser(userJSON) });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "couldnt create the user",
      });
    }
  },
  async login(req, res) {
    const { email } = req.body;
    // Validate request
    // if (!userName) {
    //   res.status(400).send({
    //     message: "Content can not be empty!",
    //   });
    //   return;
    // }
    try {
      console.log("email:::::", email);
      const user = await User.findOne({ where: { email: email.email } });
      console.log("user:::::", user);
      const userJSON = user.toJSON();
      console.log("userJSON:::::", userJSON);
      res.send({ user: userJSON, token: jwtSignUser(userJSON) });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "Unable to authenticate.",
      });
    }
  },
};
