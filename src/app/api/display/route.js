import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { Video } from "@/models/video";
import { Post } from "@/models/post";
import { Notice } from "@/models/notice";
import { Display } from "@/models/display";
import { SingleVideo } from "@/models/singleVideo";
import { SinglePost } from "@/models/singlePost";

connectDb()

export async function GET(request){
    try {
        const displays = await Display.find()
        const singleVideos = await SingleVideo.find()
        const singlePosts = await SinglePost.find()
        const videos = await Video.find()
        const posts = await Post.find()
        const notices = await Notice.find()
        return NextResponse.json({videos,posts,notices,singleVideos,singlePosts,display:displays?.[0], success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export async function POST(request){
    const {view} = await request.json()
    try {
        const display = new Display({view})
        const displays = display.save()
       return NextResponse.json({displays, success:true, message:"Display uploaded successfully"},{status:200})
    } catch (error) {
       return NextResponse.json({message:error.message,success:false},{status:500})
    }
   }

