import { HISTORY } from "@/app/dashboard/history/page";
import axios from "axios";

export const handleCopy = (aiResponse: string) => {
  navigator.clipboard
    .writeText(aiResponse)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy text.");
    });
};

export const handleDelete = async (
  historyId: string,
  updateHistoryList: (callback: (prevList: HISTORY[]) => HISTORY[]) => void
) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this history?"
  );
  if (!confirmed) return;

  try {
    const response = await axios.delete(`/api/history/${historyId}`);
    if (response.status === 200) {
      console.log("History deleted successfully.");
      updateHistoryList((prevList) =>
        prevList.filter((item) => item._id !== historyId)
      );
    } else {
      console.error("Failed to delete history:", response.data.error);
    }
  } catch (error) {
    console.error("Error deleting history:", error);
  }
};



export const handleShare = async (historyId: string) => {
  const baseUrl = `${window.location.origin}/dashboard/content/${historyId}/history`;
  const shareData = {
    title: "PK ChaSpo | AI-Powered Content Generator",
    text: "Explore this AI-powered content and see how PK ChaSpo can help you create amazing content effortlessly!",
    url: baseUrl,
  };

  try {
    if (navigator.share) {
      // Check for Web Share API support
      await navigator.share(shareData);
    } else {
      // Fallback for browsers without Web Share API
      await navigator.clipboard.writeText(baseUrl);
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred.";
    alert(`An error occurred while sharing: ${errorMessage}`);
    console.error("Share failed:", error);
  }
};
