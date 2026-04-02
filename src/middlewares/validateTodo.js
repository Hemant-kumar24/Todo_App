
const validateTodo=(req,res,next)=>{
    const {title,description}=req.body;
    if(!tittle || ! description){
        res.status(400).json({message:"all field requires"})
    }
    next();

}
module.exports={validateTodo}