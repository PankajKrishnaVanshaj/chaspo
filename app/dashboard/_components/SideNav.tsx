"use client";
import Image from "next/image";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const path = usePathname();

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div className="h-screen relative p-3 shadow-sm border bg-white">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={"/chaspo.png"}
          alt="logo"
          width={50}
          height={50}
          // className="rounded-full"
        />
        <span className="font-extrabold text-2xl  bg-clip-text text-transparent bg-gradient-to-br from-purple-900 via-red-500 to-purple-600">
          PK ChaSpo
        </span>
      </div>

      <hr className="mt-6 border" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${
                path === menu.path ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
