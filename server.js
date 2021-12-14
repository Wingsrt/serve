const express=require('express');

const app=express();
let cors = require("cors");
app.use(cors());

const port =process.env.port || 1835;


const mongoose=require("mongoose");
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connect=()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/practisall",{
      useCreateIndex:true,
      useNewUrlParser:true,
      useUnifiedTopology:true,
        
    })
}


const Users = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    gender: { type: String },
  });
  
  const userinfo = mongoose.model("user", Users);


  app.post("/add", async function (req, res) {
     var c = await userinfo.create(req.body);

    console.log(req.body)
  
     return res.send(c);
  });





app.get("/", async function (req, res) {
    return res.send("wow its connected");
  });


app.listen(port, async function () {
    await connect();
    console.log(port);
  });