const express = require ("express");

const app = express ();

app.get("/", (req,res)=>{
    console.log("hello world");
    res.send("this is a response from the server from 192. 168.1.122.3000")
    res.render(``)
});

app.listen(3000, ()=>{
    console.log("Express app is running on port 3000");
});