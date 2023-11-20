import { NextResponse } from "next/server";
import { SingleVideo } from "@/models/singleVideo";

export async function PUT(request, { params }) {
  const { url,isYoutube } = await request.json();
  const { id } = params;
  try {
    const video = await SingleVideo.findById(id);
    video.url = url;
    video.isYoutube =isYoutube;
    const updatedVideo = video.save();
    return NextResponse.json(
      { message: "Video updated successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}


export async function DELETE(request, { params }) {
    const { id } = params;
    try {
       await SingleVideo.deleteOne({_id:id});
      return NextResponse.json(
        { message: "Video deleted successfully", success: true },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: error.message, success: false },
        { status: 500 }
      );
    }
  }