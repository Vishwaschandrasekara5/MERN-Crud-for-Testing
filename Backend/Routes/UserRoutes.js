const express = require("express");
const router = express.Router();
const User = require("../Model/UserModel")
const UserController = require("../controllers/UserControllers");

router.get("/", UserController.getAllUsers)
router.post("/", UserController.addusers)

module.exports = router;