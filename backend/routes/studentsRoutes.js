

const express =require("express");

const route=express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("this is the student information");
})

route.get("/result",(req,res)=>{
    res.send("this is the result");
})

route.get("/fees",(req,res)=>{
    res.send("this is the fees");
})


module.exports=route;