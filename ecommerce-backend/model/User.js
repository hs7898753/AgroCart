const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
   
   name:{
       type:String,
       require:true
   },
   email:{
    type:String,
    require:true,
    unique:true
   },
   password:{
    type:Buffer,
    require:true,
    unique:true
   },
   role:{
        type:String,
        require:true,
        default:"user"
   },
   address:{
    type:[mongoose.SchemaTypes.Mixed]
   },
   orders:{
    type:[mongoose.SchemaTypes.Mixed]
   },
   salt:Buffer


})


const User=new mongoose.model("User",userSchema);
module.exports=User;