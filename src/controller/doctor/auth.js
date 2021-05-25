const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");



exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.json({
        error: "Doctor already registered",
      });

   

      let role = "doctor";

      const { firstName, lastName, email, password } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        hash_password:hash_password,
        username:shortid.generate(),
        role:role
      });

      _user.save((error, data) => {
        if (error) 
        {
          console.log(error);
          return res.json({
            error: "Something went wrong",
          });
        }

        if (data)
         {
          return res.json({
            message: "Doctor registered Successfully..!",
          });
        }
      });
  });
};

exports.signin = (req, res) =>
 {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) 
        return res.json({ error:error });

    if (user) 
    {
      
      const isPassword = await user.authenticate(req.body.password);
      if (
        isPassword &&
        (user.role === "doctor" )
      ) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.cookie("token", token, { expiresIn: "1d" });
        res.status(200).json({
          message:"successfully logged in",
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } 
      else
       {
        return res.json({
          error: "Invalid Password",
        });
      }
    }
     else 
     {
      return res.json({ error: "Something went wrong" });
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
