import connectToDatabase from "@/DataBase/connectdb";
import HistoryModel from "@/DataBase/models/HistoryModel";
import cron from "node-cron";

// auto delete 1 month old history
export async function deleteOldHistory() {
  try {
    await connectToDatabase();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const result = await HistoryModel.deleteMany({
      createdAt: { $lt: oneMonthAgo },
    });
    console.log(`Deleted ${result.deletedCount} old history records.`);
  } catch (error) {
    console.error("Error deleting old history records:", error);
  }
}

// Schedule the job to run every day at midnight
cron.schedule("0 0 * * *", async () => {
  await deleteOldHistory();
});
