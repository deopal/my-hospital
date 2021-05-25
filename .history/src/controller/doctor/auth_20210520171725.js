const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

function getValueForNextSequence(sequenceOfName){

    var sequenceDoc = db.sample.findAndModify({
      query:{_id: sequenceOfName },
       update: {$inc:{sequence_value:1}},
       new:true
     });
        return sequenceDoc.sequence_value;
    }



exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res.status(400).json({
        message: "Doctor already registered",
      });

    User.estimatedDocumentCount(async (err, count) => 
    {
      if (err) 
         return res.status(400).json({ error });

      let role = "doctor";

      const { firstName, lastName, email, password,gender,contactNumber } = req.body;
      const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        UniqueId
        firstName,
        lastName,
        email,
        hash_password,
        username: shortid.generate(),
        role,
        gender,
        contactNumber,
      });

      _user.save((error, data) => {
        if (error) 
        {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }

        if (data) {
          return res.status(201).json({
            message: "Doctor registered Successfully..!",
          });
        }
      });
    });
  });
};

exports.signin = (req, res) =>
 {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) 
        return res.status(400).json({ error });

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
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        });
      } 
      else
       {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    }
     else 
     {
      return res.status(400).json({ message: "Something went wrong" });
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
