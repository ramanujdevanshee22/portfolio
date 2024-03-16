import myImage from "../../../public/my_self.jpg";
import myImageMobile from "../../../public/my_self_mobile.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
export default function HomePage() {
  return (
    <div className="flex justify-center mb-7 flex-wrap items-end overflow-y-auto scrollbar scrollbar-thumb-black scrollbar-w-2 z-10 h-screen absolute top-0 w-screen">
       <Image priority
        src={myImageMobile}
        alt="Background Image"
        // layout="fill"
        // objectFit="cover"

        className="z-1 border object-cover w-screen h-screen absolute top-0 left-0 sm:hidden"
      />
      <Image priority
        src={myImage}
        alt="Background Image"
        // layout="fill"
        // objectFit="cover"

        className="z-1 border object-cover w-screen h-screen absolute top-0 left-0 hidden sm:block"
      />
      <div className="flex flex-col p-6 text-center gap-4 text-white z-20 ">
        <span className="text-lg font-light sm:font-medium  sm:text-5xl font-solid text-white ">
          Devanshee Ramanuj
        </span>
        <span className="tracking-wider text-lg sm:text-2xl font-handwriting text-white ">
          Full stack developer
        </span>
        <span className="font-medium font-popins tracking-wide sm:text-xl text-sm  ">
          A Computer engineering student who has a strong interest in web
          development.
        </span>
        <div className="flex justify-center">
            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 h-8 " />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300  hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2 h-8" />
            </a>

            {/* HackerRank */}
            <a
              href="https://hackerrank.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
            >
              <FontAwesomeIcon icon={faHackerrank} className="mr-2 h-8" />
            </a>

            {/* LeetCode */}
            {/* <a
              href="https://leetcode.com/yourusername" 
              // target="_blank"
              // rel="noopener noreferrer"
              // className="text-gray-300 hover:bg-white/75 hover:text-black px-3 py-2 text-lg tracking-wider transition-all duration-500 font-semibold flex items-center"
            >
              <img src={LeetCodeIcon} alt="LeetCode" className="mr-2 h-8" />
            </a> */}
          </div>
      </div>
    </div>
  );
}
