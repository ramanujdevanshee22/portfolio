import Project from "../../../../public/project2 (1).png";

import ReactLogo from "./assests/react.png";
import NextJS from "./assests/nextjs.png";
import MongoDB from "./assests/mongodb.png";
import GraphQl from "./assests/graphql.png";
import NodeJS from "./assests/nodejs.png";
import Redux from "./assests/redux.png";
import SocketIO from "./assests/socket.png";
import TailwindCSS from "./assests/tailwindcss.png";
import Framer from "./assests/framer.png";
import RestAPI from "./assests/rest-api.png";
import WebRTC from "./assests/webrtc.png";
import Axios from "./assests/Axios.png";
import Lucia from "./assests/lucia_icon.png";
import Cloudinary from "./assests/cloudinary.svg";
import Image from "next/image";

const projects = [
  // {
  //   name: "Reporting and Resolution Portal - Collector & Citizens of Rajkot",
  //   desc: "Developed web application for both, citizens and collector of Rajkot to attend online meets and many more.",
  //   imgs: [ReactLogo, NextJS, MongoDB, GraphQl, NodeJS, Redux, TailwindCSS, SocketIO, Framer,],
  //   redirect: [ {href: "https://tirth-reso-collector-portal.firebaseapp.com/", btnName: "Collector Demo"},
  //   {href: "https://tirth-shah-reso-portal-project.firebaseapp.com/", btnName: "Citizen Demo"},
  //   {href: "abc", btnName: "Github Repo"}
  //  ]
  // },
  {
    name: "E-book store",
    desc: "Developed an application that provides an user-friendly experience for managing (CRUD) operations for user profiles, book information, cart orders, and categories.",
    imgs: [ReactLogo, MongoDB, Redux, NodeJS, Axios],
    redirect: [
      { href: "https://e-book-store-dramanuj22.web.app/", btnName: "Demo" },
      {
        href: "https://github.com/ramanujdevanshee22/E-book-Selling",
        btnName: "Github",
      },
    ],
  },
  {
    name: "BlogBox",
    desc: "Next.js blog app with Lucia authentication and Cloudinary for image uploads. Users can sign up, log in, view blogs, publish blogs, and like or comment on entries.",
    imgs: [NextJS, MongoDB, Lucia, TailwindCSS, Cloudinary],
    redirect: [
      {
        href: "https://blog-box-nextjs-ramanujdevanshee22.vercel.app/",
        btnName: "Demo",
      },
      {
        href: "https://github.com/ramanujdevanshee22/Blog-Box",
        btnName: "Github",
      },
    ],
  },
  {
    name: "Hackathon 2022",
    desc: "Developed a portal for availing the Birth, Marriage and Death certificate virtually.",
    imgs: [
      ReactLogo,
      MongoDB,
      SocketIO,
      NodeJS,
      Redux,
      WebRTC,
      Framer,
      RestAPI,
    ],
    redirect: [
      {
        href: "https://hackathon-2022-government.netlify.app/",
        btnName: "Government-Demo",
      },
      {
        href: "https://hackathon-2022-citizen.netlify.app/",
        btnName: "Citizen-Demo",
      },
      {
        href: "https://github.com/ramanujdevanshee22/Hackathon-2022-Citizen",
        btnName: "Github Repo",
      },
    ],
  },

  {
    name: "Virtual Marketplace.",
    desc: "CRUD operation using NodeJS",
    imgs: [ReactLogo, MongoDB, NodeJS],
    redirect: [
      {
        href: "https://github.com/ramanujdevanshee22/Virtual-Marketplace-backend",
        btnName: "Github",
      },
    ],
  },
];

const ProjectPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen overflow-x-hidden">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16 bg-fuchsia-200 flex justify-center ">
        <Image
          priority
          src={Project}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-[70%] flex flex-col items-center ml-5 gap-5 h-[calc(100dvh)]">
        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14 text-fuchsia-800">
          Projects
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-5">
          {projects.map((project) => {
            return (
              <div
                key={project.name}
                className="w-[20rem] min-h-[17rem] bg-fuchsia-100 rounded-lg p-4 flex flex-col gap-7"
              >
                <h1 className="font-medium text-3xl font-handwriting">
                  {project.name}
                </h1>
                <div className="w-full gap-x-7 gap-y-4 flex flex-row flex-wrap">
                  {project.imgs.map((img) => (
                    <div className="relative w-7 h-7" key={img}>
                      <Image src={img} alt="tech" fill />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  {project.redirect.map((link) => (
                    <div className="flex flex-row gap-2" key={link.href}>
                      <a
                        target="_blank"
                        href={link.href}
                        className="text-blue-500 underline underline-offset-2"
                      >
                        {link.btnName.toLowerCase()}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
