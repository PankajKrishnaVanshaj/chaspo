import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/DataBase/connectdb";
import HistoryModel, { IHistory } from "@/DataBase/models/HistoryModel";
import UserModel from "@/DataBase/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { Types } from "mongoose";

async function connectDB() {
  try {
    await connectToDatabase();
  } catch (error) {
    throw new Error("Database connection error");
  }
}



export async function GET(req: Request) {
  try {
    const session = await getServerSession({
      req,
      ...authOptions,
    })
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Validate if ID is valid
      if (!Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          { success: false, error: "Invalid ID format" },
          { status: 400 }
        );
      }
      try {
        const history = await HistoryModel.findById(id);
        if (!history) {
          return NextResponse.json(
            { success: false, error: "history not found" },
            { status: 404 }
          );
        }
        return NextResponse.json(
          { success: true, data: history },
          { status: 200 }
        );
      } catch (error) {
        console.error("Error fetching history details:", error);
        return NextResponse.json(
          { success: false, error: "Server Error" },
          { status: 500 }
        );
      }
    } else {
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

      const historyData = await HistoryModel.find({
        createdBy: user._id,
      });

      return NextResponse.json(
        { success: true, data: historyData },
        { status: 200 }
      );
    }
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
