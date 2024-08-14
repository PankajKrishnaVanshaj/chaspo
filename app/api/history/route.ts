import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/DataBase/connectdb";
import HistoryModel, { IHistory } from "@/DataBase/models/HistoryModel";
import UserModel from "@/DataBase/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";

async function connectDB() {
  try {
    await connectToDatabase();
  } catch (error) {
    throw new Error("Database connection error");
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession({
      req, // Include req directly here
      ...authOptions, // Spread the authOptions to include all other necessary options
    });
    await connectDB();

    const createdBy = session?.user?.email;
    if (!createdBy) {
      return NextResponse.json(
        { success: false, error: "Missing createdBy parameter" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ email: createdBy });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const histories = await HistoryModel.find({ createdBy: user._id });

    return NextResponse.json(
      { success: true, data: histories },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error occurred:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const session = await getServerSession({
      req,
      ...authOptions,
    });
    const body = await req.json();

    const { formData, aiResponse, templateSlug } = body;
    const createdBy = session?.user?.email;

    if (!formData || !aiResponse || !templateSlug) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!createdBy) {
      return NextResponse.json(
        { success: false, error: "Missing createdBy parameter" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ email: createdBy });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Create a new history entry using the Mongoose model
    const newHistory = new HistoryModel({
      formData,
      aiResponse,
      templateSlug,
      createdBy: user._id,
    });

    const savedHistory = await newHistory.save();

    return NextResponse.json(
      { success: true, data: savedHistory },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error occurred:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
