import mongoose, { Document, Schema, Model } from "mongoose";
import { IUser } from "./user";

export interface IHistory extends Document {
  formData: any;
  aiResponse: string;
  templateSlug: string;
  createdBy: mongoose.Types.ObjectId | IUser;
}

const HistorySchema = new Schema<IHistory>(
  {
    formData: { type: String, required: true },
    aiResponse: { type: String, required: true },
    templateSlug: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

// Ensure model is not redefined if already exists
const HistoryModel: Model<IHistory> =
  mongoose.models.History || mongoose.model<IHistory>("History", HistorySchema);

export default HistoryModel;
