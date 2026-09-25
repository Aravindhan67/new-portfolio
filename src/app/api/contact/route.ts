import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const body = await req.json();
    const { name, email, subject, message } = body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Create new message in DB
    const newMessage = await Message.create({
      name,
      email,
      subject,
      message
    });
    
    return NextResponse.json(
      { success: true, message: "Message sent successfully", data: newMessage },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
