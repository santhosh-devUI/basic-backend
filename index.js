import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routings from "./src/routes/routes.js"
dotenv.config()
const app=express()
mongoose.connect('mongodb://localhost:27017/students-basic')
.then(console.log(`DB Connected on port 1111 `))
.catch(err=>{
    console.log("Error")
})
app.use(cors())

let corsOptions = {
    origin: [ '*' ]
};

app.use(express.json())

app.use("/std",cors(corsOptions),routings)

app.listen(1111,(req,res)=>{
    console.log("welcome to Backend");
})