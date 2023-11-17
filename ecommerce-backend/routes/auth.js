const express=require("express");
const passport=require("passport")
const { createUser, loginUser, checkUser } = require("../controllers/auth");

const router=express.Router();

// /auth is added in the base path
router.post("/signup",createUser)
      .post("/login",passport.authenticate("local"),loginUser)
      .get("/check",checkUser)
      // check user banana hai abhi get se 9:31



exports.router=router;