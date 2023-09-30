// src/components/Sidebar.tsx
import type { FC } from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@/utils/api";

import { TbArrowBarRight, TbArrowBarLeft } from "react-icons/tb";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div
        className={`bg-gray-900 text-white ${
          isOpen ? "w-64" : "w-0"
        } transition-all duration-300`}
      >
        <ul className="space-y-2">
          {/* Sample menu items */}
          <li
            className={`px-4 py-2 hover:bg-gray-700 ${isOpen ? "" : "hidden"}`}
          >
            <div className="flex items-center space-x-4">
              <span>🏠</span>
              {isOpen && <span>Dashboard</span>}
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl text-white">
                {hello.data ? hello.data.greeting : "Loading tRPC query..."}
              </p>
              <AuthShowcase />
            </div>
          </li>
          {/* ... add other menu items similarly */}
        </ul>

        {isOpen && (
          <div className="border-t p-4">
            {/* User profile */}
            <div className="flex items-center space-x-4">
              <img
                src="/path/to/avatar.jpg"
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
              />
              <div>Tom Cook</div>
            </div>
          </div>
        )}
      </div>
      <div className="relative left-2 top-2 w-0 text-white ">
        {isOpen && (
          <button onClick={() => setIsOpen(false)}>
            <TbArrowBarLeft className="h-7 w-7" />
          </button>
        )}
        {!isOpen && (
          <button onClick={() => setIsOpen(true)}>
            <TbArrowBarRight className="h-7 w-7" />
          </button>
        )}
      </div>
    </>
  );
};

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default Sidebar;
