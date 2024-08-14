"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import axios from "axios";
import Image from "next/image";
import moment from "moment";
import { handleCopy } from "@/components/handleCopy";
import { Button } from "@/components/ui/button";
import { ChevronsLeft, ChevronsRight, Copy } from "lucide-react";

export interface HISTORY {
  id: string;
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
    <div className="m-5 p-5 border rounded-lg bg-white">
      <div className=" flex justify-between ">
        <h2 className="font-bold text-3xl">History</h2>
        <div className="gap-5 flex items-center">
          <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <ChevronsLeft />
          </Button>
          {currentPage}
          <Button
            onClick={handleNextPage}
            disabled={endIndex >= historyList.length}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
      <p className="text-gray-500">
        Search your previously generated AI content
      </p>
      <div className="hidden md:grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESP</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      {currentItems.map((item: HISTORY, index: number) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-1 md:grid-cols-7 my-5 py-3 px-3">
            <h2 className="md:col-span-2 flex gap-2 items-center">
              <Image
                src={GetTemplateName(item?.templateSlug)?.icon || ""}
                width={25}
                height={25}
                alt="icon"
              />
              <span>{GetTemplateName(item.templateSlug)?.name}</span>
            </h2>
            <h2 className="md:col-span-2 line-clamp-3 mr-3">
              {item?.aiResponse}
            </h2>
            <h2 className="hidden md:block">
              {moment(item.createdAt).format("DD/MM/YYYY")}
            </h2>
            <h2 className="hidden md:block">{item?.aiResponse.length}</h2>
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopy(item.aiResponse)}
              >
                <Copy className="w-4 h-4 mr-1" /> Copy
              </Button>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default History;
