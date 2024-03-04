const jwt=require('jsonwebtoken');
const userModel = require('../models/user');

const authMiddleware=async(req,res,next)=>{
    try{
        const token=req.header('Authorization').split(" ")[1];
        
        if(!token){
            return res.status(404).json({message:'Token not found'});
        }

        const decoded=await jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);

        if(!decoded){
            return res.status(404).json({message:'Unauthorized'});
        }

        const user=await userModel.findById(decoded?.userId).select('-password')
        if(!user){
            return res.status(404).json({message:"Unauthorize"});
        }

        req.user=user;
        next();
        
        res.json({ok:'ok'})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports=authMiddleware;