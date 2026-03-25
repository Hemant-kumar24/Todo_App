const express=require('express')
const app=express();
const port=8000;
const todoRoute=require("./src/routes/todoRoute")
const connectDB=require("./src/config/db")
connectDB();
app.use(express.json());
app.use("/api/todos",todoRoute);

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})