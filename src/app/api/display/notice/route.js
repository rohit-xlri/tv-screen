import { NextResponse } from "next/server";
import { connectDb } from "@/config/dbConfig";
import { Notice } from "@/models/notice";
connectDb()

export async function GET(request){
    try {
        const notices = await Notice.find()
        return NextResponse.json({notices, success:true},{status:200})
    } catch (error) {
        return NextResponse.json({message:error.message,success:false},{status:500})
    }
}

export async function POST(request){
    const {text} = await request.json()
    try {
        const notice = new Notice({text})
        const notices = notice.save()
       return NextResponse.json({notices, success:true, message:"Notice uploaded successfully"},{status:200})
    } catch (error) {
       return NextResponse.json({message:error.message,success:false},{status:500})
    }
   }
