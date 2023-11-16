const mongoose=require("mongoose");

const cartSchema= new mongoose.Schema({
   
   product:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Product",
       require:true
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       require:true
   },
   quantity:{
       type:Number,
       require:true
   }

})


const Cart=new mongoose.model("Cart",cartSchema);
module.exports=Cart;