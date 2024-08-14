import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import TotalUsageContext from "@/app/(context)/TotalUsageContext";
import UserSubscriptionContext from "@/app/(context)/UserSubscriptionContext";
import UpdateCreditUsageContext from "@/app/(context)/UpdateCreditUsageContext";
import axios from "axios";
import Link from "next/link";

function UsageTrack() {
  const [maxWords, setMaxWords] = useState(50);
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const { updateCreditUsage } = useContext(UpdateCreditUsageContext);

  // useEffect(() => {
  //   GetData();
  // }, [updateCreditUsage]);

  const GetData = async () => {
    try {
      const response = await axios.get(`/api/history`);
      const result = response.data.data;
      // GetTotalUsage(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const GetTotalUsage = (result: HISTORY[]) => {
  //   let total: number = 0;
  //   result.forEach((element) => {
  //     total = total + Number(element.aiResponse?.length);
  //   });

  //   setTotalUsage(total);
  //   console.log(total);
  // };

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width:
                totalUsage / maxWords > 1
                  ? "100%"
                  : (totalUsage / maxWords) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {totalUsage}/{maxWords} credit used
        </h2>
      </div>
      <Button
        variant={"secondary"}
        className="w-full my-3 text-primary cursor-pointer hover:scale-105"
      >
        <Link href={"/dashboard/billing"}>Support Me</Link>
      </Button>
    </div>
  );
}

export default UsageTrack;
