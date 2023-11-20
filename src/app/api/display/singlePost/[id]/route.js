import { NextResponse } from "next/server";
import { SinglePost } from "@/models/singlePost";

export async function PUT(request, { params }) {
  const { url } = await request.json();
  const { id } = params;
  try {
    const post = await SinglePost.findById(id);
    post.url = url;
    const updatedPost = post.save();
    return NextResponse.json(
      { message: "Post updated successfully", success: true },
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
       await SinglePost.deleteOne({_id:id});
      return NextResponse.json(
        { message: "Post deleted successfully", success: true },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: error.message, success: false },
        { status: 500 }
      );
    }
  }