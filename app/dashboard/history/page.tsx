"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import axios from "axios";
import Image from "next/image";
import moment from "moment";
import { handleCopy, handleDelete, handleShare } from "@/components/Actions";
import { Button } from "@/components/ui/button";
import { ChevronsLeft, ChevronsRight, Copy, Share2, Trash2 } from "lucide-react";
import Link from "next/link";

export interface HISTORY {
  _id: string;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 5;

const History = () => {
  const { data } = useSession();
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const createdBy = data?.user?.email;

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`/api/history`);
        const sortedHistory = response.data.data.sort(
          (a: HISTORY, b: HISTORY) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setHistoryList(sortedHistory);
      } catch (error) {
        console.error("Error fetching history from database:", error);
      }
    };

    if (createdBy) {
      fetchHistory();
    }
  }, [createdBy]);

  const updateHistoryList = (callback: (prevList: HISTORY[]) => HISTORY[]) => {
    setHistoryList(callback);
  };

  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find(
      (item) => item.slug === slug
    );
    return template;
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(historyList.length / ITEMS_PER_PAGE))
    );
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = historyList.slice(startIndex, endIndex);

  return (
    <div className="m-5 p-6 border rounded-lg bg-gray-50 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-extrabold text-3xl text-gray-800">History</h2>
        <div className="flex gap-3 items-center">
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="p-2 rounded-md bg-purple-800 hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronsLeft />
          </Button>
          <span className="text-lg font-medium">{currentPage}</span>
          <Button
            onClick={handleNextPage}
            disabled={endIndex >= historyList.length}
            className="p-2 rounded-md bg-purple-800 hover:bg-gray-300 disabled:opacity-50"
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
      <p className="text-gray-600 mb-6 text-base">
        Search your previously generated AI content
      </p>

      {currentItems.map((item: HISTORY, index: number) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 mb-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
            <div className="flex items-center gap-3 w-full sm:w-1/4">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon || "/placeholder-icon.png"}
                width={36}
                height={36}
                alt="icon"
                className="rounded-full bg-gray-200 p-2 shadow-sm"
              />
              <span className="text-sm font-medium text-gray-700">
                {GetTemplateName(item.templateSlug)?.name || "Unknown"}
              </span>
            </div>

            <div className="flex-1 mt-2 sm:mt-0">
              <Link href={`/dashboard/content/${item?._id}/history`} passHref>
                <p
                  className="text-sm sm:text-base line-clamp-2 sm:line-clamp-3 overflow-hidden text-gray-800 hover:text-purple-600 hover:font-semibold transition duration-200"
                  dangerouslySetInnerHTML={{
                    __html: item?.aiResponse,
                  }}
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center w-1/4 text-center">
            <span className="text-xs text-gray-500">
              {moment(item.createdAt).format("DD/MM/YYYY")}
            </span>
            <span className="text-xs text-gray-600">
              {item?.aiResponse.split(" ").length} words
            </span>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDelete(item._id, updateHistoryList)}
              className="flex items-center gap-2 text-red-600 border-red-500 hover:bg-red-100"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare(item._id)}
              className="flex items-center gap-2 text-blue-600 border-blue-500 hover:bg-blue-100"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(item.aiResponse)}
              className="flex items-center gap-2 text-gray-600 border-gray-500 hover:bg-gray-200"
            >
              <Copy className="w-4 h-4" />
              Copy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
