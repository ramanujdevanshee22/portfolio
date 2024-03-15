'use client'
import Education from "../../../../public/education.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const education = [
  { qualification: "Bachelor of Engineering", location: "Leelaben Dasrathbhai Ramdas Patel Institute of Technology & Research, Gandhinagar", result: "CGPA: 8.3" },
  { qualification: "Higher Secondary Certficate", location: "Shri N.P. Bhalodia High School, Junagadh", result: "Percentage: 58%" },
  { qualification: "Secondary School Certificate", location: "Shri N.P. Bhalodia High School, Junagadh", result: "Percentage: 90%" },

]



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

      <div className="w-[70%] flex flex-col items-center pl-16">
        <div className="text-5xl underline underline-offset-4 font-semibold font-poppins mt-14 text-sky-950">Education</div>

        <ul className="mt-6">

          {education.map(data => (
            <div className=" border p-4 shadow-md shadow-slate-500 rounded-lg mt-6 hover:transform hover:scale-105 transition-all duration-500 ease-in-out bg-slate-500 bg-opacity-10">
              <li className={`transition-all duration-500 ease-in-out  text-2xl font-handwriting ${showInfo ? "mt-1 list-disc animate-none text-slate-900 " : ""}`}>{showInfo && data.qualification}</li>
              <li className="font-mono tracking-wider text-slate-500">{showInfo && ` ${data.location}`}</li>
              <li className="font-mono tracking-wider text-slate-400 ">{showInfo && ` ${data.result}`}</li>
            </div>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default EducationPage;
