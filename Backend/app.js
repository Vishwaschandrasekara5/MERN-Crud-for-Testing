//MeCIZfuUq1Yg1T2d
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Middlerware

app.use("/", (req, res, next) => {
    res.send("Ït is Working");
})

mongoose.connect("mongodb+srv://admin:MeCIZfuUq1Yg1T2d@cluster0.67s5tt9.mongodb.net/")
.then(()=>console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=> console.log((err)));
