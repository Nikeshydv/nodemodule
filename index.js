
const express=require("express");

const app=express();

const stuRoute=require("./routes/studentRoutes");

app.use("/student",stuRoute);


app.listen(9000,()=>{
    console.log("server is running on port 9000");
});