const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.json({
        error: "Patient already registered",
      });


    const { firstName, lastName, email, password} = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      firstName:firstName,
      lastName:lastName,
      email:email,
      hash_password:hash_password,
      username: shortid.generate(),
    
    });

    _user.save((error, data) => {
      if (error) {
        console.log(error);
        return res.json({
          error: "Something went wrongsanjeev",
        });
      }

      if (data) {
       
        return res.json({
          message : "Patient registered successfully !",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.json({ error :"something went wrongsanjeev1"});
    if (user) 
    {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword && user.role === "patient") 
      {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.cookie("token", token, { expiresIn: "1d" });
        res.status(200).json({
          message:'logged in successfully',
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } else {
        return res.json({
          error: "INVALID PASSWORD",
        });
      }
    } 
    else 
    {
      return res.json({ error: "INVALID USER" });
    }
  });
};

exports.signout = (req, res) => 
{
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};
