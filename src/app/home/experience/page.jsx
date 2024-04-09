import Experience from "../../../../public/experience.png";
import Image from "next/image";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen ">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16 bg-lime-100 flex justify-center ">
        <Image priority
          src={Experience}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center pl-[7rem] sm:pl-6">

        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14 text-lime-800">Experience</div>
        <div className="order p-4 shadow-md shadow-slate-300 rounded-lg m-6 hover:transform hover:scale-95 transition-all duration-500 ease-in-out bg-lime-500 bg-opacity-10 flex gap-4 flex-col sm:w-auto">
          <div className="flex items-center gap-4">
            <span className=" font-handwriting text-2xl">ReactJs Intern</span>
            <hr className="flex-grow border-b-2 border-gray-300 mx-2 my-2" />
            <span className=" text-xl font-medium font-poppins">May 2023 - June 2023</span>
          </div>

          <h3 className="font-mono tracking-widest">📍TatvaSoft (Ahmedabad)</h3>
          <span className="font-display tracking-widest  ">Developed E-bookstore frontend with API integration for features such as adding, removing, updating, search books and adding/removing items to cart. </span>
          <div className="flex flex-row gap-3">

            <div class="bg-gradient-to-br from-lime-500  to-yellow-300 text-white font-bold py-1 px-3 rounded-lg shadow-lg">
              React
            </div>

            <div class="bg-gradient-to-br from-lime-500 to-yellow-200 text-white font-bold py-1 px-3 rounded-lg shadow-lg">
              Redux
            </div>
            <div class="bg-gradient-to-br from-lime-500 to-yellow-200 text-white font-bold py-1 px-3 rounded-lg shadow-lg">
              API
            </div>
          </div>

        </div>

      </div>


    </div>

  )
}

export default ExperiencePage