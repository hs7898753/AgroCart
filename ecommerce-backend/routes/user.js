const express=require("express");
const { fetchUserById, updateUser } = require("../controllers/user");

const router=express.Router();

// /user is added in the base path
router.get("/:id",fetchUserById)
      .patch("/:id",updateUser)



exports.router=router;