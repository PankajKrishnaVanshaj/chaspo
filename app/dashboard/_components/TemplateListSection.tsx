import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const ITEMS_PER_PAGE = 11;

function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filterData = Templates.filter((item) =>
      item.name.toLowerCase().includes(userSearchInput?.toLowerCase() || "")
    );
    setTemplateList(filterData);
    setCurrentPage(1); // Reset to the first page whenever the search input changes
  }, [userSearchInput]);

  const totalPages = Math.ceil(templateList.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = templateList.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-10">
        {currentItems.map((item: TEMPLATE, index: number) => (
          <TemplateCard key={index} {...item} />
        ))}

        <div className="flex justify-center items-center gap-5 mt-5">
          <Button
            className="hover:scale-110"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <ChevronsLeft />
          </Button>
          {currentPage}
          <Button
            className="hover:scale-110"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TemplateListSection;
