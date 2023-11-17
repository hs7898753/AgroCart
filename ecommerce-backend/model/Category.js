const mongoose=require("mongoose");

const categorySchema= new mongoose.Schema({
   
   label:{
       type:String,
       require:true
   },
   value:{
    type:String,
    require:true
   }

})


const Category=new mongoose.model("Category",categorySchema);
module.exports=Category;