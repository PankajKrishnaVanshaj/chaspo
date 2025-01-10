import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/DataBase/connectdb";
import HistoryModel from "@/DataBase/models/HistoryModel";
import UserModel from "@/DataBase/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";

// Define expected types for parameters
interface Params {
  id: string;
}

// Utility function to ensure database connection
async function connectDB(): Promise<void> {
  try {
    await connectToDatabase();
  } catch (error: any) {
    console.error("Database connection error:", error.message);
    throw new Error("Unable to connect to the database");
  }
}

// DELETE route handler
export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  try {
    // Ensure database connection
    await connectDB();

    // Extract session using getServerSession with NextRequest
    const session = await getServerSession(authOptions); // Correct usage for app router
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    // Extract history ID from request params
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { success: false, error: "History ID is required" },
        { status: 400 }
      );
    }

    const userEmail = session.user.email;

    // Find the authenticated user
    const user = await UserModel.findOne({ email: userEmail }).exec();
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Locate the history record by ID
    const history = await HistoryModel.findById(id).exec();
    if (!history) {
      return NextResponse.json(
        { success: false, error: "History record not found" },
        { status: 404 }
      );
    }

    // Check authorization
    if (history.createdBy.toString() !== user._id.toString()) {
      return NextResponse.json(
        { success: false, error: "Unauthorized to delete this history record" },
        { status: 403 }
      );
    }

    // Delete the history record
    await HistoryModel.findByIdAndDelete(id).exec();

    return NextResponse.json(
      { success: true, message: "History record deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error during DELETE operation:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
