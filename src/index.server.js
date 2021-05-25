const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");




//routes

const authRoutes = require("./routes/auth");
const doctorRoutes = require("./routes/doctor/auth");
const categoryRoutes = require("./routes/category");
const pageRoutes = require("./routes/doctor/page");
const orderRoutes = require("./routes/order");

//environment variable or you can say constants
env.config();

const PORT = process.env.PORT || 2000;

// mongodb connection
// mongodb+srv://sanju:<password>@cluster0.mbzhi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ubtyv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority
// mongodb://deopal:<password>@cluster0-shard-00-00.ubtyv.mongodb.net:27017,cluster0-shard-00-01.ubtyv.mongodb.net:27017,cluster0-shard-00-02.ubtyv.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-bf4yg6-shard-0&authSource=admin&retryWrites=true&w=majority

mongoose
  .connect(
      `mongodb://deopal:01234560@cluster0-shard-00-00.ubtyv.mongodb.net:27017,cluster0-shard-00-01.ubtyv.mongodb.net:27017,cluster0-shard-00-02.ubtyv.mongodb.net:27017/abcd?ssl=true&replicaSet=atlas-bf4yg6-shard-0&authSource=admin&retryWrites=true&w=majority
      `,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch(e=>{
    console.log("not connected");

  });

  

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", authRoutes);
app.use("/api", doctorRoutes);
/*
app.use("/api", categoryRoutes);
app.use("/api", pageRoutes);
app.use("/api", orderRoutes);
*/

if(process.env.NODE_ENV=="production"){
  app.use(express.static("hospital/build"));
  const path=require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'hospital','build','index.html'));
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

