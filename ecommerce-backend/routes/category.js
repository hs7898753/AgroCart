const express=require("express");
const { fetchCategory, createCategory } = require("../controllers/category");

const router=express.Router();

// /categories is added in the base path
router.get("/",fetchCategory)
      .post("/",createCategory)



exports.router=router;