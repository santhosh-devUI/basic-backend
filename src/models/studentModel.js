import mongoose from "mongoose";

const stdSchema= new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    mobile:{
        type:Number
    }
},{
    timestamps:true
})

const stdModel=mongoose.model('student-list', stdSchema)

export default stdModel