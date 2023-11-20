import mongoose from "mongoose";

const schema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    }
})

mongoose.models = {}

export const SinglePost = mongoose.model("SinglePost", schema)