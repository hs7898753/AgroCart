const express=require("express");
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require("../controllers/cart");

const router=express.Router();

// /cart is added in the base path
router.post("/",addToCart)
      .get("/",fetchCartByUser)
      .delete("/:id",deleteFromCart)
      .patch("/:id",updateCart)

exports.router=router;