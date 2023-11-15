import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { Video } from "@/models/video";

connectDb()

export async function GET(request){
    try {
        const videos = await Video.find()
        return NextResponse.json({videos, success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export async function POST(request){
    const {url,duration} = await request.json()
    try {
        const video = new Video({url,duration})
        const videos = video.save()
       return NextResponse.json({videos, success:true, message:"Video uploaded successfully"},{status:200})
    } catch (error) {
       return NextResponse.json({message:error.message,success:false},{status:500})
    }
   }
