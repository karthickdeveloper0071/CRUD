const express =require("express");
const users =require("./sample.json")
const app =express();
const port=8000;
//display all users
app.get("/user,(req,res)")
app.listen(port,(err)=> {
    console.log(`App is running in port ${port}`)
})
