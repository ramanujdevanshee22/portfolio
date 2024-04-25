'use client'
import Education from "../../../../public/education.png";
import Image from "next/image";
import { useState, useEffect } from "react";





const EducationPage = () => {
  // const [showInfo, setShowInfo] = useState(false);


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowInfo(true);
  //   }, 1500);
  //   return () => clearTimeout(timeout);
  // }, []);

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

      <div className="w-[70%] flex flex-col items-center pl-[7rem] sm:pl-6">
        <div className="text-5xl underline underline-offset-4 font-semibold font-poppins mt-14 text-sky-950">Reach me out!</div>

        <ul className="mt-8">
        <form  className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col w-500">

                    <label htmlFor="form-name">Name </label>
                    <input id="form-name" autoComplete="name" maxLength={50} size="lg" name="name" className="text-black"/>

                    <label htmlFor="form-email"> Email:</label>
                    <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="text-black"/>
                 
                    <label htmlFor="form-email"> Phone Number</label>
                    <input id="form-email" required autoComplete="number" maxLength={80} name="email" type="email" className="text-black"/>

                    <label htmlFor="form-message"> Message: </label>
                    <textarea id="form-message" required name="message" rows={5} className="text-black"/>

                </div>
                <button className=" rounded p-4 text 
                border-2 bg-sky-400" type="submit">Send</button>
            </form>

        </ul>
      </div>
    </div>
  );
};

export default EducationPage;
