const express=require('express');
const router=express.Router();
const {getTodos,createTodo,updateTodo,deleteTodo}=require("../controllers/todoControllers")

router.get("/",getTodos)
router.post("/",createTodo)
router.post('/update',updateTodo)
router.delete('/delete',deleteTodo)
module.exports=router