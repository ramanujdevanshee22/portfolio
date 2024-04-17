import Paper from "../../../../public/papers (2).png";
import Image from "next/image";

const PapersPage = () => {
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

          <div className="border-2 border-green-400 h-full w-full rounded-xl m-6 p-3">
            <div>

            </div>
          </div>


      


      </div>
    </div>
  )
}

export default PapersPage