import Project from "../../../../public/project2 (1).png";

import Image from "next/image";
import ReactLogo from "./assests/react.png";
import NextJS from "./assests/nextjs.png";
import MongoDB from "./assests/mongodb.png";
import FramerMotion from "./assests/framer-motion-logo.png";
import GraphQl from "./assests/graphql.png";
import NodeJS from "./assests/nodejs.png";
import Redux from "./assests/redux.png";
import SocketIO from "./assests/socket.png";
import TailwindCSS from "./assests/tailwindcss.png";
import Framer from "./assests/framer.png";
import RestAPI from "./assests/rest-api.png";
import WebRTC from "./assests/webrtc.png";
import Axios from "./assests/Axios.png";


//Add e-book store and enhance virtual marketplace.
// redirecting tabs

const projects = [
  {
    name: "Reporting and Resolution Portal - Collector & Citizens of Rajkot",
    desc: "Developed web application for both, citizens and collector of Rajkot to attend online meets and many more.",
    imgs: [ReactLogo, NextJS, MongoDB, GraphQl, NodeJS, Redux, TailwindCSS, SocketIO, Framer,],
    // redirect: [{href: "https://www.geeksforgeeks.org/gate-corner-2-gq/", btnName: Collector-Demo}  ]
  },
  {
    name: "Online Requisition Portal - Gujarat Govt.",
    desc: "Developed a portal for availing the Birth, Marriage and Death certificate virtually.",
    imgs: [ReactLogo,  MongoDB, SocketIO, NodeJS, Redux, WebRTC,  Framer, RestAPI ] 
  },
  {
    name: "E-book store.",
    desc: "Developed an application that provides an user-friendly experience for managing (CRUD) operations for user profiles, book information, cart orders, and categories.",
    imgs: [ReactLogo, MongoDB ,Redux, NodeJS, Axios ] // axios
  },
  {
    name: "Virtual Marketplace.",
    desc: "Developed a Portal for availing the Birth, Marriage and Death certificate virtually.",
    imgs: [ReactLogo, MongoDB ,Redux, NodeJS,  ]
  },



]

const ProjectPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16 bg-fuchsia-200 flex justify-center ">
        <Image priority
          src={Project}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>


      <div className="w-[70%] flex flex-col items-center pl-[7rem] sm:pl-6">
        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14 text-fuchsia-800">Project</div>

        <div className="flex flex-row items-center border-2 border-green-600 m-5 :h-svh sm:overflow-y-auto flex-wrap justify-center gap-14 sm:gap-24  scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">



          {projects.map(project =>
            <>
              <div className="flex flex-col border-4 border-red-500 h-fit sm:h-full justify-center sm:flex-wrap sm:flex-row "  >
                <div className="flex flex-row items-start gap-36 m-5 border-2 border-yellow-700 w-80 h-full">
                  <div className="group relative ">
                    <div className="flip-card-front bg-white p-6 rounded-lg shadow-gray-300 shadow-xl flex flex-col gap-7 h-full ">
                      <span className="font-handwriting text-2xl font-medium tracking-wide w-52 ">{project.name}
                      </span>
                      <span className="font-poppins tracking-widest text-gray-500">{project.desc} </span>
                      <div className="flex flex-row gap-4 flex-wrap">
                        {project.imgs.map((img) => (
                          <img
                            key={img.src}
                            src={img.src}
                            alt="React Logo"
                            className="w-12 h-12"
                          />
                        ))}

                      </div>
                    </div>

                    {/* Back side of the flip card */}
                    <div className="flip-card-back bg-white p-6 rounded-lg shadow-lg absolute top-0 left-0 w-full h-full backface-hidden opacity-0 rotate-y-180 transition duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center">
                      {/* Content for the back side if needed */}
                   
                      
                      <div className="flex gap-3  ">
                        <a href="#collector-demo" className="bg-gradient-to-br  from-fuchsia-400 to-sky-200 text-white font-bold py-1 px-3 rounded-lg shadow-lg text-center">Collector Demo</a>
                        <a href="#citizen-demo" className="bg-gradient-to-br  from-fuchsia-400 to-sky-200 text-white font-bold py-1 px-3 rounded-lg shadow-lg text-center">Citizen Demo</a>
                        <a href="#github-code" className="bg-gradient-to-br  from-fuchsia-400 to-sky-200 text-white font-bold py-1 px-3 rounded-lg shadow-lg text-center">GitHub Code</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>


          )}

        </div>
      </div>
    </div>
  )
}

export default ProjectPage;
