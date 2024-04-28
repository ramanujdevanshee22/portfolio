'use client'
import Paper from "../../../../public/papers (2).png";
import SurveyCerti from "../../../../public/survey_certificate.jpg";
import Image from "next/image";
import { useState } from "react";

const PapersPage = () => {

  const [showLightbox, setShowLightbox] = useState(false);

  const handleLinkClick = () => {
    setShowLightbox(!showLightbox);
  };
  return (


    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16  bg-yellow-200 flex justify-center ">
        <Image priority
          src={Paper}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center">

        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14 text-yellow-500">Papers</div>

        <div className="sm:h-full sm:w-full w-screen rounded-xl m-6 p-3">
          <div className="border p-4 shadow-md shadow-slate-600 rounded-lg mt-6 ml-20 hover:transform hover:scale-105 transition-all duration-500 ease-in-out bg-yellow-400 bg-opacity-10 flex flex-col sm:w-[80%] w-full justify-center gap-4">
            <div className="transition-all duration-500 ease-in-out text-black/40 tracking-widest text-sm font-bold font-display">Survey Paper</div>
            <div className="text-3xl font-handwriting text-black">A Comprehensive Review on Integration of Blockchain and IoT</div>
            <hr className="border-gray-300 " />

            <span className="text-md font-mono text-neutral-400 tracking-wider">⮞ Insights into how this convergence could reshape digital landscapes.</span>
            <div className="font-poppins tracking-wider text-slate-600">
              <span className="font-bold">Authors:</span> Jalpa Khamar, Tirth Shah, and Devanshee Ramanuj
            </div>
            <div className="font-poppins tracking-wider text-slate-600">
              <span className="font-bold">Publication Details:</span> International Journal for Scientific Research and Development [Conference 12 : LDRP TECON23] (2023): 254-258
            </div>
            <div className="font-poppins tracking-wider text-slate-600">
              <span className="font-bold">Conference:</span> LDRP TECON23
            </div>
            <div className="font-poppins tracking-wider text-slate-600">
              <span className="font-bold">Conference E-Proceedings Link:</span> <a className="underline underline-2 ring-offset-1 underline-offset-2" href="https://www.ijsrd.com/index.php?p=C_Archive&c_number=12">LDRP TECON23</a>
            </div>
            

            <div className="font-poppins tracking-wider gap-5 flex">
              <button className="font-poppins tracking-wider bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none">
                <a className="" href="https://www.ijsrd.com/articles/LDRPTCP049.pdf" target="_blank" rel="noopener noreferrer">Download Paper</a>
              </button>
              <button className="font-poppins tracking-wider  bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none ">
              <a href="#" onClick={handleLinkClick} className="text-white cursor-pointer ">View Certificate</a>
              </button>
            </div>
          </div>




        </div>
        <div>





        </div>
      </div>
       {/* Lightbox */}
       {showLightbox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 overflow-auto">
          <div className="max-w-3xl max-h-full">
            <button
              className="fixed top-3 right-5 text-white hover:text-gray-200 text-3xl"
              onClick={handleLinkClick}
            >
            ❌
            </button>
            <Image
              src={SurveyCerti}
              alt="Internship Certificate"
              layout="responsive"
              objectFit="contain"
              className=""
            />
          </div>
        </div>)}



    </div>
  )
}

export default PapersPage