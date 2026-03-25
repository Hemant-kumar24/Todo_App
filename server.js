const express=require('express')
const app=express();
const port=8000;
const connectDB=require("./src/config/db")
connectDB();
app.get('/',(req,res)=>{
    console.log(`server is running`);
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})