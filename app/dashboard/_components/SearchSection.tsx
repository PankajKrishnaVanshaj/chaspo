import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div
      className="m-2 p-5 bg-gradient-to-br from-purple-500 via-red-500 
    to-purple-500 animate-background-shift flex flex-col justify-center items-center text-white rounded-xl"
    >
      <h2 className="text-4xl font-extrabold mb-4">Browse All Templates</h2>
      <p className="text-lg mb-6">What would you like to create today?</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-3 items-center p-3 border-2 border-blue-300 rounded-full bg-white shadow-lg my-5 w-[60%]">
          <Search className="text-blue-500" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
