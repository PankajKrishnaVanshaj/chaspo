import connectToDatabase from "@/DataBase/connectdb";
import HistoryModel from "@/DataBase/models/HistoryModel";

// auto delete 3 months old history
export async function deleteOldHistory(): Promise<void> {
  try {
    // console.log("Attempting to connect to the database...");

    await connectToDatabase();
    // console.log("Connected to the database.");

    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3); // subtract 3 months

    // console.log("Deleting records older than: ", threeMonthsAgo);

    const result = await HistoryModel.deleteMany({
      createdAt: { $lt: threeMonthsAgo },
    });

    // console.log(`Deleted ${result.deletedCount} old history records.`);
  } catch (error) {
    console.error("Error deleting old history records:", error);
  }
}

// Function to calculate time until midnight
function getTimeUntilMidnight(): number {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0); // set to next midnight
  return midnight.getTime() - now.getTime(); // returns the difference in milliseconds
}

// Custom scheduler
function scheduleMidnightJob(): void {
  const timeUntilMidnight = getTimeUntilMidnight();

  // Schedule the first execution at midnight
  setTimeout(async () => {
    // console.log("First execution at midnight");
    await deleteOldHistory();

    // After the first execution, set an interval to run daily at midnight
    setInterval(async () => {
      // console.log("Cron job triggered at midnight");
      await deleteOldHistory();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  }, timeUntilMidnight); // wait until midnight to start
}

// Start the custom job
scheduleMidnightJob();
