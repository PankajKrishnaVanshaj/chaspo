"use client";
import { Search } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const { status, data } = useSession();
  const [infoVisible, setInfoVisible] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false }); // sign out without redirect
    setInfoVisible(false); // close the user info modal if open
    window.location.href = "/"; // redirect manually to the homepage
  };

  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center py-2 pl-10 border rounded-md max-w-lg bg-white">
        {/* <Search /> */}
        <input
          type="text"
          placeholder="Experiment"
          className="outline-none bg-transparent "
          disabled
        />
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="hidden md:block bg-primary p-1 rounded-full text-xs text-white px-2 ">
          <Link href={"/dashboard/billing"}>
            Join Membership just for $9.99/Month
          </Link>
        </h2>
        {/* authentication */}
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <div className="block rounded-md text-sm font-medium text-white transition ">
              {status === "authenticated" && (
                <>
                  <Image
                    className="rounded-full w-10 h-10 cursor-pointer"
                    src={data?.user?.image!}
                    alt="logo"
                    width={60}
                    height={60}
                    onClick={() => setInfoVisible(!infoVisible)}
                  />
                  {infoVisible && (
                    <div className="absolute bg-gray-100 p-6 rounded-md shadow-md top-20 right-4">
                      <h2 className="text-xl font-semibold mb-4 text-gray-500">
                        User Information
                      </h2>
                      <ul className="space-y-2">
                        <li className="text-lg text-gray-600">
                          {data?.user?.name}
                        </li>
                        <li className="text-gray-600">{data?.user?.email}</li>
                        <li>
                          <button
                            onClick={() => {
                              handleSignOut();
                            }}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300 ease-in-out"
                          >
                            Sign Out
                          </button>{" "}
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
