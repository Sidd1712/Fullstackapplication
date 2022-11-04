const jwt = require("jsonwebtoken");
const { User } = require("../models/index");


const jwtSignUser = (user)=>{
const tokenExpiryTime = 60*60*24*7;
return jwt.sign(user,"secret",{expiresIn:tokenExpiryTime});



}
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

      console.log('email',email);
      const user = await User.create(userName);
      console.log('user',user);
      const userJSON = user.toJSON();
      res.send({ user: userJSON,token:jwtSignUser(userJSON) });
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
      res.send({ user: userJSON,token:jwtSignUser(userJSON) });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        error: "Unable to authenticate.",
      });
    }
}
}