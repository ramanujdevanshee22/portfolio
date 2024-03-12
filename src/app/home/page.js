import myImage from "../../../public/my_self.jpg";
import myImageMobile from "../../../public/my_self_mobile.jpg";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="flex justify-center  mb-10  flex-wrap h-56 overflow-y-auto scrollbar scrollbar-thumb-black scrollbar-w-2 z-10 sm:h-56">
       <Image priority
        src={myImageMobile}
        alt="Background Image"
        // layout="fill"
        // objectFit="cover"

        className="z-1 border object-cover w-screen h-screen absolute top-0 left-0 sm:hidden"
      />
      <Image priority
        src={myImage}
        alt="Background Image"
        // layout="fill"
        // objectFit="cover"

        className="z-1 border object-cover w-screen h-screen absolute top-0 left-0 hidden sm:block"
      />
      <div className="flex flex-col p-3 text-center gap-5 text-white z-20">
        <span className="text-lg font-light sm:font-medium  sm:text-5xl font-solid text-white ">
          Devanshee Ramanuj
        </span>
        <span className="tracking-wider text-lg sm:text-2xl font-handwriting text-white ">
          Full stack developer
        </span>
        <span className="font-medium font-popins tracking-wide sm:text-xl text-sm  ">
          A Computer engineering student who has a strong interest in web
          development.
        </span>
      </div>
    </div>
  );
}
