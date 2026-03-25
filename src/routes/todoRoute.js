const express=require('express');
const router=express.Router();
const {getTodos,createTodo}=require("../controllers/todoControllers")

router.get("/",getTodos)
router.post("/",createTodo)
module.exports=router