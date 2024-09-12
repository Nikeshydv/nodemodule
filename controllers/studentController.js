const stuinfo=(req,res)=>{
    res.send("thiss iss the information of student")
};


const stuResult=(req,res)=>{
    res.send("this is the result information")
};



module.exports ={
    stuinfo,
    stuResult
}