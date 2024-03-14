'use client'
import Education from "../../../../public/education.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const EducationPage = () => {
  const [showInfo, setShowInfo] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInfo(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row  h-screen absolute top-0 left-0 w-screen">
      <div className="sm:w-[30%] sm:top-0 relative -top-16 bg-laurel-300 flex justify-center ">
        <Image
          priority
          src={Education}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-[70%] flex flex-col items-center">
        <div className="text-5xl underline underline-offset-4 font-semibold font-poppins mt-14">Education</div>

        <ul className="mt-6">

          <div className=" border p-4 shadow-lg rounded-lg mt-6 hover:transform hover:scale-105 ransition-all duration-500 ease-in-out">
            <li className={`list-disc transition-all duration-500 ease-in-out animate-pulse text-2xl  font-handwriting ${showInfo ? "mt-1 list-disc animate-none" : ""}`}>{showInfo && "Bachelor of Engineering"}</li>
            <li className="font-mono tracking-wider">{showInfo && " Leelaben Dashrathbhai Ramdas Patel Institue of Technology and Research, Gandhinagar"}</li>
            <li className="font-mono tracking-wider">{showInfo && " CGPA: 8.3"}</li>
          </div>

          <div className=" border p-4 shadow-lg rounded-lg mt-6 hover:transform hover:scale-105 ransition-all duration-500 ease-in-out">
            <li className={`list-disc transition-all duration-500 ease-in-out animate-pulse text-2xl font-handwriting ${showInfo ? "mt-1 list-disc animate-none" : ""}`}>{showInfo && "Higher Secondary Certificate"}</li>
            <li className="font-mono tracking-wider">{showInfo && " Shri N.P. Bhalodia High School, Junagadh"}</li>
            <li className="font-mono tracking-wider">{showInfo && " Percentage: 58%"}</li>
          </ div>

          <div className=" border p-4 shadow-lg rounded-lg mt-6 hover:transform hover:scale-105 ransition-all duration-500 ease-in-out">
             
          <li className={`list-disc transition-all duration-500 ease-in-out animate-pulse text-2xl font-handwriting  ${showInfo ? "mt-1 list-disc animate-none" : ""}`}>{showInfo && "Secondary School Certificate"}</li>
          <li className="font-mono tracking-wider">{showInfo && " Shri N.P. Bhalodia High School, Junagadh"}</li>
          <li className="font-mono tracking-wider">{showInfo && " Percentage: 90%"}</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EducationPage;
