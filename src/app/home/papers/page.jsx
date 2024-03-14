import Paper from "../../../../public/papers (2).png";
import Image from "next/image";

const PapersPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="w-[30%]  bg-yellow-200 flex justify-center ">
        <Image priority
          src={Paper}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center">
        <div className=" ">
        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14">Papers</div>


        </div>


      </div>
    </div>
  )
}

export default PapersPage