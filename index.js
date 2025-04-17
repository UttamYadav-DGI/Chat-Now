import dotenv from "dotenv"
import connectDB from "./src/DB/index.js"
import express from express
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb connection failed",err);
})