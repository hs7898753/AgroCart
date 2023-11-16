
const Product=require("../model/Product");


exports.createProduct= async (req,res)=>{
    
    // we will get the product through API
    try{
    const product=new Product(req.body); 
    const doc= await product.save();
    // console.log(doc);
    res.status(201).send(doc);
    }
    catch(e){
        res.status(400).send(e);
    }
    
}


exports.fetchAllProducts= async (req,res)=>{
    

    // yaha pe change ho skta hai admin ke liye aage
    let query= Product.find({deleted:{$ne:true}});

    if(req.query.category)
    {
        query=query.find({category:req.query.category});
    }
    try{ 
    const doc= await query.exec();
    // console.log(doc);
    res.status(201).send(doc);
    }
    catch(e){
        res.status(400).send(e);
    }
    
}


exports.fetchProductById= async (req,res)=>{
    
    const {id} =req.params;

    try{
        const product=await Product.findById(id); 
        res.status(200).send(product);
        }
        catch(e){
            res.status(400).send(e);
        }


}



exports.updateProduct= async(req,res)=>{
      
    const {id}= req.params;
    try{
          const product=await Product.findByIdAndUpdate(id, req.body,{new:true});
          res.status(200).json(product);
    }
    catch(e){
        res.status(400).send(e);
    }
}