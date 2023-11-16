const User=require("../model/User")


exports.fetchUserById= async (req,res)=>{
    
    const {id} =req.params;

    try{
        const user=await User.findById(id); 
        res.status(200).send(user);
        }
        catch(e){
            res.status(400).send(e);
        }


}


exports.updateUser= async(req,res)=>{
      
    const {id}= req.params;
    try{
          const user=await User.findByIdAndUpdate(id, req.body,{new:true});
          res.status(200).json(user);
    }
    catch(e){
        res.status(400).send(e);
    }
}