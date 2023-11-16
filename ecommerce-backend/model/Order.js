const mongoose=require("mongoose");

const orderSchema= new mongoose.Schema({

   items:{
      type:[mongoose.Schema.Types.Mixed],
      require:true
   },
   totalAmount:{
    type:Number
   },
   totalItems:{
       type:Number
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
       ref:"User",
       require:true
   },
   paymentMethod:{
    type:String,
    require:true
   },
   status:{
    type:String,
    default:"pending"
   },
   selectedAddress:{
    type:mongoose.Schema.Types.Mixed,
    require:true
   }

})


const Order=new mongoose.model("Order",orderSchema);
module.exports=Order;