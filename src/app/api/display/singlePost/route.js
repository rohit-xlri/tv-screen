import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { SinglePost } from "@/models/singlePost";

connectDb()

export async function GET(request){
    try {
        const posts = await SinglePost.find()
        return NextResponse.json({posts, success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export async function POST(request){
    const {url} = await request.json()
    try {
        const post = new SinglePost({url})
        const posts = post.save()
       return NextResponse.json({posts, success:true, message:"Post uploaded successfully"},{status:200})
    } catch (error) {
       return NextResponse.json({message:error.message,success:false},{status:500})
    }
   }
