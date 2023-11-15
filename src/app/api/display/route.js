import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { Video } from "@/models/video";
import { Post } from "@/models/post";
import { Notice } from "@/models/notice";

connectDb()

export async function GET(request){
    try {
        const videos = await Video.find()
        const posts = await Post.find()
        const notices = await Notice.find()
        return NextResponse.json({videos,posts,notices, success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}
