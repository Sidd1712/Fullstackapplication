const { User } = require("../models/index");

module.exports = {
  async create(req, res) {
    const userName = req.body;
    // Validate request
    if (!userName) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    try {
      const user = await User.create(userName);
      const userJSON = user.toJSON();
      res.send({ user: userJSON });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "couldnt create the user",
      });
    }
  },
  async login(req, res) {
    const {email} = req.body;
    // Validate request
    // if (!userName) {
    //   res.status(400).send({
    //     message: "Content can not be empty!",
    //   });
    //   return;
    // }
    try {
      const user = await User.findOne({where:{email:email}});
      const userJSON = user.toJSON();
      res.send({ user: userJSON });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "Unable to authenticate.",
      });
    }
}
}