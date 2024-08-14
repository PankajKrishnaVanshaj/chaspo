"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Setting = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">
          Please sign in to view your profile
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-gradient-to-r from-purple-500 via-red-400 to-purple-500 animate-background-shift p-8 rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
          User Profile
        </h2>
        <div className="flex flex-col items-center mb-8">
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt="User Image"
              width={120}
              height={120}
              className="rounded-full mb-4 border-4 border-purple-600"
            />
          )}
          <p className="text-xl font-medium text-gray-800">
            {session.user?.name}
          </p>
          <p className="text-gray-600">{session.user?.email}</p>
        </div>
        <button
          onClick={() => signOut()}
          className="w-full py-3 px-6 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition-colors duration-300"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Setting;
