// import "./globals.css";

// const myImage = require("../../../public/my_self.jpg");

import NavBar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    // <div className="flex flex-col items-center h-screen justify-end">
    <div>
      <NavBar />

      <div className="z-20">{children}</div>
    </div>
  );
}
