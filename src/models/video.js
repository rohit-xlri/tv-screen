import mongoose from "mongoose";

const schema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    isYoutube:{
        type:Boolean,
        default:false
    }
})

mongoose.models = {}

export const Video = mongoose.model("Video", schema)