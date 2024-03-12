"use client";
import Link from "next/link";
import { useState } from "react";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="border border-red-200 z-30   ">
      <div
        onClick={() => setOpen(!open)}
        className="p-4 space-y-2  bg-opacity-55 absolute top-0 left-0 z-20"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <>
            <span className="block w-9 h-1 bg-gray-100"></span>
            <span className="block w-9 h-1 bg-gray-100"></span>
            <span className="block w-9 h-1 bg-gray-100"></span>
          </>
        )}
      </div>

      <nav
        className={`bg-zinc-800 bg-opacity-70 absolute top-12 h-[93%] transition-all duration-1000 z-20 ${
          open ? "left-0" : "-left-60"
        }`}
      >
        {/* <div className="mx-auto w-full px-4 sm:px-6 lg:px-8"> */}
        <div className="flex justify-start flex-col ">
          <Link
            href="/home"
            className={`text-gray-300 hover:bg-white/75  hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold ${
              pathName === "/home" ? "bg-white/30" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/home/education"
            className={`${
              pathName === "/home/education" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75  hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Education
          </Link>
          <Link
            href="/home/projects"
            className={`${
              pathName === "/home/projects" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Projects
          </Link>
          <Link
            href="/home/experience"
            className={`${
              pathName === "/home/experience" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Experience
          </Link>
          <Link
            href="/home/skills"
            className={`${
              pathName === "/home/skills" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Skills
          </Link>
          <Link
            href="/home/papers"
            className={`${
              pathName === "/home/papers" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Papers
          </Link>
          <Link
            href="/home/certificates"
            className={`${
              pathName === "/home/certificates" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500  font-semibold`}
          >
            Certificates
          </Link>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}
