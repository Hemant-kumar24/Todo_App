const Todo=require("../models/todoModel")
const createTodo=async(req,res)=>{
    try{
        const todo=await Todo.create(req.body);
        res.status(200).send("created successfully")
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
};
const getTodos=async(req,res)=>{
    try{
        const todo=await Todo.find();
        res.status(200).send(todod)
    }catch(error){
        res.status(500).json({error:error.message});
    }
};
const updateTodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndUpdate(req.body.id,req.body);
        res.status(200).send("updated successfully")
    }catch(error){
        res.status(500).json({error:error.message});        
    }
}

const deleteTodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndDelete(req.body.id);
        res.status(200).send("deleted successfully")
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports={createTodo,getTodos,updateTodo,deleteTodo};