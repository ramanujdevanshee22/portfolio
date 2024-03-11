'use client'
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false)

  return (

    <div className="border border-red-200  ">
        
      {/* <div onClick={()=>{setOpen(!open)}} class=" p-4 space-y-2 bg-gray-600 rounded shadow absolute top-0 left-0 z-20">
        <span class="block w-8 h-0.5 bg-gray-100"></span>
        <span class="block w-8 h-0.5 bg-gray-100"></span>
        <span class="block w-8 h-0.5 bg-gray-100"></span>
      </div> */}

<div
        onClick={() => setOpen(!open)}
        className="p-4 space-y-2 rounded bg-opacity-55 absolute top-0 left-0 z-20"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
            <span className="block w-5 h-0.5 bg-gray-100"></span>
            <span className="block w-6 h-0.5 bg-gray-100"></span>
            <span className="block w-7 h-0.5 bg-gray-100"></span>
          </>
        )}
      </div>

       
      <nav className={`bg-zinc-800 bg-opacity-70 py-4 absolute top-12 h-[93%] transition-all duration-1000 z-20 ${open? "left-0" : "-left-60" }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center flex-col">
            
              <Link href="/home" className="text-white text-sm font-medium ">
                Home
              </Link>
            
            
              <Link
                href="/home/projects"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="/home/experience"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </Link>
              <Link
                href="/home/education"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Education
              </Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
}
