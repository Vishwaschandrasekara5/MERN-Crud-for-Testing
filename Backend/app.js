//MeCIZfuUq1Yg1T2d
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();
const cors = require("cors");

//Middlerware

app.use(express.json()); 
app.use(cors()); 
app.use("/",router);


mongoose.connect("mongodb+srv://admin:MeCIZfuUq1Yg1T2d@cluster0.67s5tt9.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=> console.log((err)));
