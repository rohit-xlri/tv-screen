import { NextResponse } from "next/server";
import { Post } from "@/models/post";

export async function PUT(request, { params }) {
  const { url } = await request.json();
  const { id } = params;
  try {
    const post = await Post.findById(id);
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
       await Post.deleteOne({_id:id});
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