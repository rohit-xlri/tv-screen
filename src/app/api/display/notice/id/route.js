import { NextResponse } from "next/server";
import { Notice } from "@/models/notice";

// export async function PUT(request, { params }) {
//   const { text } = await request.json();
//   const { id } = params;
//   try {
//     const notice = await Notice.findById(id);
//     notice.text = text;
//     const updatedNotice = notice.save();
//     return NextResponse.json(
//       { message: "Notice updated successfully", success: true },
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
//        await Notice.deleteOne({_id:id});
//       return NextResponse.json(
//         { message: "Notice deleted successfully", success: true },
//         { status: 200 }
//       );
//     } catch (error) {
//       return NextResponse.json(
//         { message: error.message, success: false },
//         { status: 500 }
//       );
//     }
//   }