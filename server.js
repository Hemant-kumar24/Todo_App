const express=require('express')
const app=express();
const port=8000;
const todoRoute=require("./src/routes/todoRoute")
const connectDB=require("./src/config/db")
const cookieParser=require("cookie-parser")
const session = require('express-session');
app.use(cookieParser())
const userRoute=require("./src/routes/userRoute")
connectDB();
app.use(express.json());
app.use("/api/todos",todoRoute);
app.use("/api/users",userRoute)
app.get('/set-cookie',(req,res)=>{
    res.cookie("name","user-1");
    res.send("cookie set")
})
app.get('/get-cookie',(req,res)=>{
    res.send(req.cookies)
})
app.use(session({
    secret:"Hemant",
    resave:false,
    saveUninitialized:true,
}))
app.get("/profile",(req,res)=>{
    if(req.session.user){
        res.send({user:req.session.user})
    }
    else{
        res.send("please login")
    }
})
app.get("/login",(req,res)=>{
    req.session.user="hemant";  
    res.send("profile")
})
app.get("/logout",(req,res)=>{
    res.send("logout")
    req.session.destroy();
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`); 
})