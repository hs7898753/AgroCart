const Cart=require("../model/Cart")

exports.addToCart= async (req,res)=>{
    
    // we will get the category through API
    try{
    const cart=new Cart(req.body); 
    const doc= await cart.save();
    const result= await doc.populate("product");
    // console.log(doc);
    res.status(201).json(result);
    }
    catch(e){
        res.status(400).json(e);
    }
    
}


exports.fetchCartByUser= async (req,res)=>{
    
    const {user}= req.query;
    try{ 
    const cart= await Cart.find({user:user}).populate("product");
    // console.log(doc);
    res.status(201).json(cart);
    }
    catch(e){
        res.status(400).json(e);
    }
    
}

exports.updateCart= async(req,res)=>{
      
    const {id}= req.params;
    try{
          const cart=await Cart.findByIdAndUpdate(id, req.body,{new:true});
          const result= await cart.populate("product");
          res.status(200).json(result);
    }
    catch(e){
        res.status(400).json(e);
    }
}

exports.deleteFromCart= async(req,res)=>{
    const {id}= req.params;
    try{
          const doc= await Cart.findByIdAndDelete(id);
          res.status(200).json(doc);

    }
    catch(e){
        res.status(400).json(e);
    }
}