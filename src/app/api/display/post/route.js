import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { Post } from "@/models/post";

connectDb()

export async function GET(request){
    try {
        const posts = await Post.find()
        return NextResponse.json({posts, success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export async function POST(request){
    const {url} = await request.json()
    try {
        const post = new Post({url})
        const posts = post.save()
       return NextResponse.json({posts, success:true, message:"Post uploaded successfully"},{status:200})
    } catch (error) {
       return NextResponse.json({message:error.message,success:false},{status:500})
    }
   }
