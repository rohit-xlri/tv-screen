import mongoose from "mongoose";

const schema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        default:0
    }
})

mongoose.models = {}

export const Video = mongoose.model("Video", schema)