const user = require("../Model/UserModel");
const { param } = require("../Routes/UserRoutes");


const getAllUsers = async (req, res) => {

    let users;

    try{
       users = await user.find(); 
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Error fetching users" });
        
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

const getbyid = async(req, res) =>{

    const id = req.params.id;

    let User;

    try{
        User = await user.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!User){
       return res.status(404).json({message:"User not found"})
    }

    return res.status(200).json({User})
}

const updateuser = async(req, res) =>{

    const id = req.params.id;
    const {name, email, age, address} = req.body;

    try {
        const updatedUser = await user.findByIdAndUpdate(
            id,
            { name, email, age, address },
            { new: true }  // This ensures we get the updated document back
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ 
            message: "User updated successfully",
            user: updatedUser 
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error updating user" });
    }
}

const deleteuser = async (req, res) => {

    const id = req.params.id;

    let User;

    try{
        User = await user.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!User){
        return res.status(404).json({message:"Unable to delete user"})
    }

    return res.status(200).json({User})
}

module.exports = {getAllUsers, addusers, getbyid, updateuser, deleteuser}