import mongoose, { Document, Schema, Model } from "mongoose";

export interface ISubscription extends Document {
  name: string;
  email: string;
  active: boolean;
  paymentId: string;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    active: { type: Boolean, default: false },
    paymentId: { type: String, required: true },
  },
  { timestamps: true }
);

// Ensure model is not redefined if already exists
const SubscriptionModel: Model<ISubscription> =
  mongoose.models.Subscription ||
  mongoose.model<ISubscription>("Subscription", SubscriptionSchema);

export default SubscriptionModel;
