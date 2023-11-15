import mongoose from "mongoose";

const schema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

mongoose.models = {}

export const Notice = mongoose.model("Notice", schema)