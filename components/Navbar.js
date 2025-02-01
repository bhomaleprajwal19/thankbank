"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter()

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <nav className="bg-stone-800 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-14">
      <Link className="logo font-bold text-lg flex items-center" href="/">
        <img className="invertImg" src="/hands.png" width={44} alt="Logo" />
        <span className="text-xl md:text-base my-3 md:my-0">ThankBank!</span>
      </Link>
      <div className="right flex justify-center items-center gap-5">
        {/* creating search button to search users */}
        <Link href="/search">
          <button className="flex items-center gap-2 bg-white text-black rounded-xl p-1 px-2 ">
          <img src="/human-resources.gif" className="w-7" alt=""/>

           <span className="pb-1"> search</span>
            </button>
        </Link>

      <div className="relative flex items-center gap-4">
        {session ? (
          <>
            <button
            onClick={toggleDropdown}
            onBlur={() => setTimeout(() => setShowDropdown(false), 300)}
            id="dropdownDefaultButton"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >

              Account
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {showDropdown && (
              <div
                id="dropdown"
                className="z-10 absolute right-[0px] top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                    href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}

            
          </>
        ) : (
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2">
              Login
            </button>
          </Link>
        )}
      </div>
      </div>
    </nav>
  );
  

};

export default Navbar;
