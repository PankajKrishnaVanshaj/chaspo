"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import OutputSection from "../../_components/OutputSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

const History = () => {
  const params = useParams();
  const historyId = params?.["template-slug"];  // Ensure you're using the correct parameter
  const [aiOutput, setAiOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);  // To handle loading state
  const [error, setError] = useState<string>("");  // To handle errors

  const GetHistory = async () => {
    setLoading(true);  // Start loading before API call
    try {
      const response = await axios.get(`/api/history`, {
        params: { id: historyId },
      });
      const result = response.data;
      setAiOutput(result.data.aiResponse);  // Assuming the response has aiResponse
      setError("");  // Clear any previous errors
    } catch (error: any) {
      setError("Error fetching history data");
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);  // Stop loading when the request is complete
    }
  };

  useEffect(() => {
    if (historyId) {
      GetHistory();
    } else {
      setError("History ID is missing");
      setLoading(false);
    }
  }, [historyId]);

  return (
    <div className="px-5 py-2">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>

      {loading ? (
        <p>Loading...</p>  
      ) : error ? (
        <p className="text-red-500">{error}</p>  
      ) : (
        <div className="py-3">
          <OutputSection aiOutput={aiOutput} />
        </div>
      )}
    </div>
  );
};

export default History;
