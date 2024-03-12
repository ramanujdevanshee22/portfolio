// import "./globals.css";

// const myImage = require("../../../public/my_self.jpg");

import NavBar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col items-center h-screen justify-end">
      <NavBar />

      <div className="z-20 border-4 border-red-500">{children}</div>
    </div>
  );
}
