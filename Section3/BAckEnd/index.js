// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');
//const  ordersRouter = require('./routers/ordersRouter');
const cors = require('cors');


// initialising express
const app=express();

const port=5000;

// This will parse JSON data to javascript
app.use(express.json());
app.use(cors({origin : ['http://localhost:3000']}));

// Middleware
app.use('/user',userRouter);
app.use('/video',videoRouter);
//app.use('/productorder',ordersRouter);

app.get("/",(req,res)=>{
    res.send("response from express");
})

//route or endpoint 
app.get("/home",(req,res)=>{
    res.send("come back")
});

app.listen(port,()=>{
    console.log("server has started");
});