import mongoose from "mongoose";

const schema = new mongoose.Schema({
    view:{
        type:String,
        required:true
    },
    onLoop:{
        type:Boolean,
        default:false
    }
})

mongoose.models = {}

export const Display = mongoose.model("Display", schema)