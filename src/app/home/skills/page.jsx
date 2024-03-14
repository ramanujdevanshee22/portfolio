import Skills from "../../../../public/skills.png";
import React from "../../../../public/react.png";
import Mongodb from "../../../../public/Mongodb.png";
import Image from "next/image";

const Technology = [
  {tech_name:"React"},
  {tech_name:"Node"},
  {tech_name:"Next"},
  {tech_name:"Mongodb"},
  {tech_name:"sql"},
  {tech_name:"tailwindcss"},
]

const SkillsPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="w-[30%]  bg-rose-200 flex justify-center ">
        <Image priority
          src={Skills}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center">

        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14 mb-9 text-rose-900 ">Skills</div>

        {/* <div className=" p-4 shadow-lg shadow-rose-200 rounded-full hover:transform hover:scale-110 transition-all duration-500 ease-in-out hover:bg-rose-50 bg-opacity-10 flex flex-row flex-wrap ">
          {Technology.map(tech=>{
            return <Image fill src={tech.tech_name} ></Image>
          })}
        </div>
      </div> */}



    </div>
  )
}

export default SkillsPage