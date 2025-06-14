const user = require("../Model/UserModel");


const getAllUsers = async (req, res) => {

    let users;

    try{
       users = await user.find(); 
    }catch(err){
        console.log(err);
        
    }

    if(!users){
        return res.status(404).json({message:"Users not found"})
    }

    //display users
    return res.status(200).json({users})
}

const addusers = async (req, res, next) => {

    const {name, email, age, address} = req.body;

    let users;

    try{
        users = new user({name, email, age, address});
        await users.save();
    }catch(err){
        console.log(err);
    }

    if(!users){
        return res.status(404).json({message:"Unable to add user"})
    }

    return res.status(200).json({users})
}

module.exports = {getAllUsers, addusers}