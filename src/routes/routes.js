import express from "express"
import stdModel from "../models/studentModel.js"

const router=express.Router()

router.post('/addstd', (req,res)=>{
  stdModel.create(req.body).then(success=>{
    res.send(success)
  }).catch(err=>{
    res.send("error")
  })  
})

router.get('/getstds', (req,res)=>{
  stdModel.find().then(success=>{
    res.send(success)
  }).catch(err=>{
    res.send(err)
  })
})

export default router