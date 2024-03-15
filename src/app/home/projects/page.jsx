import Project from "../../../../public/project2 (1).png";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16 bg-fuchsia-200 flex justify-center ">
        <Image priority
          src={Project}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center">
        <div className=" ">
        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14  text-fuchsia-800">Project</div>
            <div>
                

            </div>

        </div>


      </div>
    </div>
  )
}

export default ProjectPage