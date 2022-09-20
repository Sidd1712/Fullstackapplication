const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const hashPassword = async (user) => {
  try {
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(user.password,salt); 
    user.setDataValue('password',hashedPassword);
  }catch(err){
    console.log(err);
  }
}

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    userName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING,unique:true },
    userId: {  type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true }
  },{
    hooks:{
      beforeSave:hashPassword
    }
  });
  return User;
};
