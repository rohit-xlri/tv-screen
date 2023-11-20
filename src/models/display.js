import mongoose from "mongoose";

const schema = new mongoose.Schema({
    view:{
        type:String,
        required:true
    }
})

mongoose.models = {}

export const Display = mongoose.model("Display", schema)