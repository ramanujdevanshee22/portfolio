import Experience from "../../../../public/experience.png";
import Image from "next/image";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="w-[30%] bg-lime-100 flex justify-center ">
        <Image priority
          src={Experience}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center">
        <div className=" ">
        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14">Experience</div>


        </div>


      </div>
    </div>
  )
}

export default ExperiencePage