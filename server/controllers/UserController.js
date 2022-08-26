const { User } = require("../models/User");
const config = require("../config");

module.exports = {
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      const userJSON = user.toJson();
      res.send({ user: userJSON });
    } catch (err) {
      res.status(400).send({
        error: "couldnt create the user",
      });
    }
  },
};
