 const mongoose=require("mongoose");

 const productSchema= new mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        // min:[0,"wrrong minimum price"],
        require:true
    },
    discountpercentage:{
        type:Number,
        // min:[1,"wrong discounted percentge"],
        // max:[99,"wrong discounted percentage"],
        require:true
    },
    rating:{
        type:Number,
        // min:[1,"wrong min rating"],
        // max:[5,"wrong max rating"],
        require:true

    },
    stock:{
        type:Number,
        // min:[1,"wrong min stock"],
        require:true
    },
    images:{
        type:String,
        require:true
    }

 })


const Product=new mongoose.model("Product",productSchema);
module.exports=Product;