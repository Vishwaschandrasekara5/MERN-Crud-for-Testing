const express = require("express");
const router = express.Router();
const User = require("../Model/UserModel")
const UserController = require("../controllers/UserControllers");

router.get("/", UserController.getAllUsers)
router.post("/", UserController.addusers)
router.get("/:id", UserController.getbyid)
router.put("/:id", UserController.updateuser)

module.exports = router;