import { NextResponse } from "next/server";
import { Display } from "@/models/display";

export async function PUT(request, { params }) {
    const { view } = await request.json();
    const { id } = params;
    try {
      const display = await Display.findById(id);
      display.view = view;
      const updatedDisplay = display.save();
      return NextResponse.json(
        { message: "View updated successfully", success: true },
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
       await Display.deleteOne({_id:id});
      return NextResponse.json(
        { message: "View deleted successfully", success: true },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: error.message, success: false },
        { status: 500 }
      );
    }
  }