import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { SingleVideo } from "@/models/singleVideo";

connectDb()

export async function GET(request){
    try {
        const videos = await SingleVideo.find()
        return NextResponse.json({videos, success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export async function POST(request){
    const {url,isYoutube} = await request.json()
    try {
        const video = new SingleVideo({url,isYoutube})
        const videos = video.save()
       return NextResponse.json({videos, success:true, message:"Video uploaded successfully"},{status:200})
    } catch (error) {
        console.log(error)
       return NextResponse.json({message:error.message,success:false},{status:500})
    }
   }
