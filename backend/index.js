
const express=require("express");

const app=express();

const stuRoute=require("./routes/studentsRoutes");
const teacher=require("./routes/teacherRoutes")

app.use("/students",stuRoute);
app.use("/teachers",teacher)

app.listen(9000,()=>{
    console.log("server is running on port 9000");
});



