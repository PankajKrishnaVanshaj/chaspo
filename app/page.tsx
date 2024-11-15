"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  File,
  Shuffle,
  Box,
  MessageCircle,
  UserIcon,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const { status, data } = useSession();
  const [infoVisible, setInfoVisible] = useState(false);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    setInfoVisible(false);
    window.location.href = "/";
  };

  return (
    <div>
      <header className="flex flex-wrap justify-between items-center w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 py-4 px-5 sm:px-7 lg:px-9">
        <div className="flex items-center">
          <div className="flex justify-center items-center gap-3">
            <Image src={"/chaspo.png"} alt="logo" width={50} height={50} />
            <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-red-500 to-purple-600">
              PK ChaSpo
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {status === "authenticated" ? (
            <>
              <Image
                className="rounded-full w-10 h-10 cursor-pointer"
                src={data?.user?.image!}
                alt="User avatar"
                width={60}
                height={60}
                onClick={() => setInfoVisible(!infoVisible)}
              />
              {infoVisible && (
                <div className="absolute bg-white dark:bg-neutral-700 p-6 rounded-md shadow-lg top-20 right-5">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    User Information
                  </h2>
                  <ul className="space-y-2">
                    <li className="text-lg text-gray-600 dark:text-gray-300">
                      {data?.user?.name}
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                      {data?.user?.email}
                    </li>
                    <li>
                      <button
                        onClick={handleSignOut}
                        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300 ease-in-out"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <nav>
              <Link
                href="/dashboard"
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-purple-600 dark:text-neutral-400 dark:hover:text-purple-500"
              >
                <UserIcon className="w-4 h-4" />
                Get Started
              </Link>
            </nav>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="flex justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-x-2 bg-white border border-purple-500 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
          >
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-red-500 to-purple-600">
              pankri.com
            </span>
            All new Apps
            <span className="py-1.5 px-2.5 inline-flex items-center gap-x-2 rounded-full bg-red-300 text-gray-600 font-semibold dark:bg-neutral-700 dark:text-neutral-400">
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="pt-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-12 lg:px-12">
          <h1 className="block text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-200">
            PK ChaSpo
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-red-500 to-purple-600">
              Your AI Content Generator
            </div>
          </h1>
        </div>

        <div className="pt-2 max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            Transform your content creation with our AI-powered app, producing
            engaging and high-quality text in just seconds.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-x-3 bg-gradient-to-br from-purple-900 via-red-500 to-purple-600 hover:scale-105 border border-transparent text-white text-sm font-medium rounded-md py-3 px-4 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800 transition duration-300 ease-in-out"
          >
            Get started
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "50+ templates",
              description: "Responsive, and mobile-first project on the web",
              icon: <File className="w-6 h-6 text-white" />,
            },
            {
              title: "Customizable",
              description: "Components are easily customized and extendable",
              icon: <Shuffle className="w-6 h-6 text-white" />,
            },
            {
              title: "Free to Use",
              description: "Every component and plugin is well documented",
              icon: <Box className="w-6 h-6 text-white" />,
            },
            {
              title: "24/7 Support",
              description: "Contact us 24 hours a day, 7 days a week",
              icon: <MessageCircle className="w-6 h-6 text-white" />,
            },
          ].map((item, index) => (
            <Link
              key={index}
              href="#"
              className="group flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-md shadow-red-500 hover:shadow-lg dark:bg-neutral-800 dark:hover:bg-neutral-700 transition duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-purple-900 via-red-500 to-purple-600 rounded-xl">
                {item.icon}
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 dark:text-neutral-200 dark:group-hover:text-purple-500 transition duration-300 ease-in-out">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
