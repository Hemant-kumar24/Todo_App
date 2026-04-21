
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")




const registerUser=async(req,res)=>{
    try{
        const {password}=req.body;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const user=await User.create({...req.body,password:hashedPassword});
        
        
        res.status(200).send("created successfully")
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
};
const loginUser=async(req,res)=>{
    try{
        const user=await User.findOne(req.body);
        const hashedPassword=await bcrypt.compare(req.body.password,user.password);
        if(!user || !hashedPassword){
            res.status(401).send("invalid credentials");
            return;
        }
        
        res.status(200).send("login successfully")
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}
const logoutUser=(req,res)=>{
    res.send("logout")
    req.session.destroy();

}

module.exports={registerUser,loginUser,logoutUser}