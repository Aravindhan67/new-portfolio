import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json({ success: false, error: "Failed to create project" }, { status: 400 });
  }
}
