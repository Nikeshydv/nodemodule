
const express= require("express");

const route= express.Router();


const stucontroller=require("../controllers/studentController");

route.get("/info",stucontroller.stuinfo);
route.get("/Result",stucontroller.stuResult)



module.exports=route;