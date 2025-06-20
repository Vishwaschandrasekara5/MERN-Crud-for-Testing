const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true

    },
    address:{
        type:String,
        required:true

    },
})

module.exports = mongoose.model("UserModel", userSchema);