const express=require("express");

const route=express.Router();

route.get("/abouttecaher",(req,res)=>{
    res.send("this is the about teacher")

})

route.get("/salary",(req,res)=>{
    res.send("this is the salary part of the teacher")

})

route.get("/department",(req,res)=>{
    res.send("this is the department section of teacher")

})

route.get("/staff",(req,res)=>{
    res.send("this is the staff section of teacher")

})

module.exports=route;