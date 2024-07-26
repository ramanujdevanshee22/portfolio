"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import LeetCodeIcon from "../../../public/leetcode.png";
import Image from "next/image";
import Linkedin from "../../../public/linkedin.png";
import HackerRank from "../../../public/hsckerrank.png";
import Github from "../../../public/github.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="z-30 ">
      <div
        onClick={() => setOpen(!open)}
        className="p-4 space-y-2  bg-opacity-55 absolute top-0 left-0 z-20"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-9 text-white bg-slate-500 fixed rounded-lg"
            fill="none"
            viewBox="0 0 25 25"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <>
            <div className=" h-9 justify-center p-2 w-[3rem] bg-slate-500 rounded-lg fixed">
            <span className="block w-8 h-1 bg-gray-100 rounded-xl fixed"></span>
            <span className="block w-8 h-1 bg-gray-100 rounded-xl fixed mt-2" ></span>
            <span className="block w-8 h-1 bg-gray-100 rounded-xl fixed mt-4"></span>
            </div>
            
          </>
        )}
      </div>

      <nav
        className={`bg-zinc-800 bg-opacity-70 fixed top-12 h-[93%] transition-all duration-1000 z-20 ${
          open ? "left-0" : "-left-72"
        }`}
      >
        {/* <div className="mx-auto w-full px-4 sm:px-6 lg:px-8"> */}
        <div className="flex justify-start flex-col ">
          <Link
            href="/home"
            className={`text-gray-300 hover:bg-white/75  hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold ${
              pathName === "/home" ? "bg-white/30" : ""
            }`}
            onClick={()=>setOpen(!open)}
          >
            Home
          </Link>

          <Link
            href="/home/education"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/education" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75  hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Education
          </Link>
          <Link
            href="/home/projects"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/projects" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Projects
          </Link>
          <Link
            href="/home/experience"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/experience" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Experience
          </Link>
          <Link
            href="/home/skills"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/skills" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Skills
          </Link>
          <Link
            href="/home/papers"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/papers" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Papers
          </Link>
          {/* <Link
            href="/home/contactMe"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/contactMe" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2  text-lg tracking-wider transition-all duration-500 font-semibold`}
          >
            Contact Me
          </Link> */}
          {/* <Link
            href="/home/certificates"
            onClick={()=>setOpen(!open)}
            className={`${
              pathName === "/home/certificates" ? "bg-white/30" : ""
            } text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500  font-semibold`}
          >
            Certificates
          </Link> */}

          <div className="flex gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/ramanujdevanshee22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 h-8 " />
            </a>
            {/* <Image src={Github} alt="Linkedinlogo" className="w-8 h-8 mt-1 rounded-lg"></Image> */}

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/devanshee-ramanuj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300  hover:text-black/45 px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 h-8" />
            </a>
            {/* <Image src={Linkedin} alt="Linkedinlogo" className="w-10 h-10 rounded-lg"></Image> */}


            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/dhabu2212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
              >
              <FontAwesomeIcon icon={faHackerrank} className="mr-2 h-8" />
            </a>

            {/* <Image src={HackerRank} alt="Linkedinlogo" className="w-10 h-10 rounded-lg"></Image> */}


           

            {/* LeetCode */}
            {/* <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
          > */}
          {/* </a> */}
            {/* <Image src={LeetCodeIcon} alt="LeetCode" className="h-10 w-10 mr-2" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
