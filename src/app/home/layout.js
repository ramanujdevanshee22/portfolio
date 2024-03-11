// import "./globals.css";
import Image from "next/image";
// const myImage = require("../../../public/my_self.jpg");
import myImage from "../../../public/my_self.jpg";
import myImageMobile from "../../../public/my_self_mobile.jpg";
import NavBar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col items-center h-screen justify-end">
      <NavBar/>
      
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
      
      {/* <div className="z-2 border-4 border-red-500"> */}
        {children}
      {/* </div> */}
    </div>
    

  );
}
