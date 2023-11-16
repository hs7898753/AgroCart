const express=require("express");
const { createOrder, fetchOrderByUser, deleteOrder, updateOrder, fetchAllOrders } = require("../controllers/order");

const router=express.Router();

// /order is added in the base path
router.post("/",createOrder)
      .get("/user/:userId",fetchOrderByUser)
      .delete("/:id",deleteOrder)
      .patch("/:id",updateOrder)
      .get("/",fetchAllOrders)
      
      

exports.router=router;