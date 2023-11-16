
const Category=require("../model/Category");



exports.fetchCategory= async (req,res)=>{
    
    
    try{ 
    const categories= await Category.find({}).exec();
    // console.log(doc);
    res.status(201).json(categories);
    }
    catch(e){
        res.status(400).json(e);
    }
    
}


exports.createCategory= async (req,res)=>{
    
    // we will get the category through API
    try{
    const category=new Category(req.body); 
    const doc= await category.save();
    // console.log(doc);
    res.status(201).send(doc);
    }
    catch(e){
        res.status(400).send(e);
    }
    
}