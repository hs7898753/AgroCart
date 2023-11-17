const Order=require("../model/Order")

exports.createOrder= async (req,res)=>{
    
    // we will get the category through API
    try{
    const order=new Order(req.body); 
    const doc= await order.save();
    // console.log(doc);
    res.status(201).json(doc);
    }
    catch(e){
        res.status(400).json(e);
    }
    
}


exports.fetchOrderByUser= async (req,res)=>{
    
    const {userId}= req.params;
    try{ 
    const order= await Order.find({user:userId}).populate("user");
    // console.log(doc);
    res.status(201).json(order);
    }
    catch(e){
        res.status(400).json(e);
    }
    
}

exports.updateOrder= async(req,res)=>{
      
    const {id}= req.params;
    try{
          const order=await Order.findByIdAndUpdate(id, req.body,{new:true});
          res.status(200).json(order);
    }
    catch(e){
        res.status(400).json(e);
    }
}

exports.deleteOrder= async(req,res)=>{
    const {id}= req.params;
    try{
          const doc= await Order.findByIdAndDelete(id);
          res.status(200).json(doc);

    }
    catch(e){
        res.status(400).json(e);
    }
}


exports.fetchAllOrders= async (req,res)=>{
    
    let query= Order.find({deleted:{$ne:true}});
    try{ 
    const doc= await query.exec();
    // console.log(doc);
    res.status(201).send(doc);
    }
    catch(e){
        res.status(400).send(e);
    }
    
}
