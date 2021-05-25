const jwt = require("jsonwebtoken");
const shortid = require("shortid");
const path = require("path");


exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } 
  else
   {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
  //jwt.decode()
};

exports.userMiddleware = (req, res, next) => {
  if (req.user.role !== "patient") {
    return res.status(400).json({ message: "pite access denied" });
  }
  next();
};

exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "doctor") {
      return res.status(400).json({ message: "Doctor access denied" });
  }
  next();
};

