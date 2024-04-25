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

          <div className="border-2 border-green-400 sm:h-full sm:w-full w-screen rounded-xl m-6 p-3">
          <div  className=" border p-4 shadow-md shadow-slate-500 rounded-lg mt-6 ml-20 hover:transform hover:scale-105 transition-all duration-500 ease-in-out bg-yellow-400 bg-opacity-10 flex gap-4 flex-col sm:w-[80%] w-full justify-center gap-4">
              <div className="transition-all duration-500 ease-in-out text-black/40 tracking-widest text-sm font-bold font-display">Survey Paper</div>
              <div className=" tracking-widest text-3xl font-handwriting text-black">An Comprehensive Review on Integration of
Blockchain and IoT</div>
<hr/>
              <div className="font-mono tracking-wider text-slate-400">Authors: 
              Jalpa Khamar, Tirth Shah and Devanshee Ramanuj. </div>
              <div className="font-mono tracking-wider text-slate-400">Publication Details: International Journal for Scientific Research and Development [Conference 12 : LDRP TECON23] (2023): 254-258.</div>
              <div className="font-mono tracking-wider text-slate-400">Conference : LDRP TECON23</div>
              <div className="font-mono tracking-wider text-slate-400">Conference E-Proceedings Link: <a className="underline underline-2 ring-offset-1 underline-offset-2" href="https://www.ijsrd.com/index.php?p=C_Archive&c_number=12">LDRP TECKON23</a></div>
              <div className="font-mono tracking-wider text-slate-400"> <a className="underline underline-2 ring-offset-1 underline-offset-2" href="https://www.ijsrd.com/articles/LDRPTCP049.pdf">Download Paper</a></div>
              <div className="font-mono tracking-wider text-slate-400"> <a className="underline underline-2 ring-offset-1 underline-offset-2" href="https://www.ijsrd.com/articles/LDRPTCP049.pdf">View Certificate</a></div>


            </div>
          </div>


      


      </div>
    </div>
  )
}

export default PapersPage