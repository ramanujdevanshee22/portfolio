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
      <div className="w-[70%] flex flex-col items-center">

        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14 text-lime-800">Experience</div>
        <div className="border border-orange-700 m-14">
          <div className="flex items-center">
            <span className=" text-base font-solid">ReactJs Intern</span>
            <hr className="flex-grow border-b-2 border-gray-300 mx-2 my-2" />
            <span className=" text-base font-solid">May 2023 - June 2023</span>
          </div>

          <h3 className="font-display tracking-wider">📍TatvaSoft (Ahmedabad)</h3>
          <span>Developed E-bookstore frontend with API integration for features such as adding, removing, updating, search books and adding/removing items to cart. </span>
          <div className="flex flex-row gap-3">

            <div class="bg-gradient-to-br from-lime-500  to-yellow-300 text-white font-bold py-2 px-6 rounded-full shadow-lg">
              React
            </div>

            <div class="bg-gradient-to-br from-lime-500 to-yellow-200 text-white font-bold py-2 px-6 rounded-full shadow-lg">
              Redux
            </div>
            <div class="bg-gradient-to-br from-lime-500 to-yellow-200 text-white font-bold py-2 px-6 rounded-full shadow-lg">
              API
            </div>
          </div>

        </div>

      </div>


    </div>

  )
}

export default ExperiencePage