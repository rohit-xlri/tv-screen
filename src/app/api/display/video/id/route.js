import { NextResponse } from "next/server";
import { Video } from "@/models/video";

// export async function PUT(request, { params }) {
//   const { url, duration } = await request.json();
//   const { id } = params;
//   try {
//     const video = await Video.findById(id);
//     video.url = url;
//     video.duration = duration;
//     const updatedVideo = video.save();
//     return NextResponse.json(
//       { message: "Video updated successfully", success: true },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: error.message, success: false },
//       { status: 500 }
//     );
//   }
// }


// export async function DELETE(request, { params }) {
//     const { id } = params;
//     try {
//        await Video.deleteOne({_id:id});
//       return NextResponse.json(
//         { message: "Video deleted successfully", success: true },
//         { status: 200 }
//       );
//     } catch (error) {
//       return NextResponse.json(
//         { message: error.message, success: false },
//         { status: 500 }
//       );
//     }
//   }