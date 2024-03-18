'use client'
import Skills from "../../../../public/skills.png";
import React from "../../../../public/react.png";
import Node from "../../../../public/node.png";
import Mongodb from "../../../../public/mongodb.png";
import Sql from "../../../../public/sql.png";
import Next from "../../../../public/next.png";
import Tailwindcss from "../../../../public/tailwindcss.png";
import Image from "next/image";

const Tech_1 = [
  { tech_name: React },
  {tech_name:Node},
  {tech_name:Next},
 
]
const Tech_2 = [
  {tech_name:Sql},
  { tech_name: Mongodb },
  {tech_name:Tailwindcss},
 
]

const SkillsPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16 bg-rose-200 flex justify-center ">
        <Image priority
          src={Skills}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col gap-16 items-center pl-16">

        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14  text-rose-900 ">Skills</div>

        <div className=" p-6 flex flex-row flex-wrap gap-16">
          {Tech_1.map(tech => {
            return <div className=" shadow-rose-200 hover:transform hover:scale-1.03 transition-all duration-500 ease-in-out hover:bg-rose-50 bg-opacity-10 shadow-lg rounded-full border h-36 w-36">

              <Image className="w-full h-full p-3" src={tech.tech_name} ></Image>

            </div>
          })}
        </div>
        <div className=" p-6 flex flex-row flex-wrap gap-16">
          {Tech_2.map(tech => {
            return <div className=" shadow-rose-200 hover:transform hover:scale-1.03 transition-all duration-500 ease-in-out hover:bg-rose-50 bg-opacity-10 shadow-lg rounded-full border h-36 w-36  ">

              <Image className="w-full h-full p-3" src={tech.tech_name} ></Image>

            </div>
          })}
        </div>
      </div>



    </div>
  )
}

export default SkillsPage