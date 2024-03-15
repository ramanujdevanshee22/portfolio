import Certificates from "../../../../public/certificates.png";
import Image from "next/image";

const CertificatesPage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
      <div className="sm:p-4 sm:w-[30%] sm:top-0 relative -top-16 bg-orange-200 flex justify-center ">
        <Image priority
          src={Certificates}
          alt="Background Image"
          // layout="fill"
          // objectFit="cover"

          className="  object-cover w-full h-full "
        />

      </div>
      <div className="w-[70%] flex flex-col items-center">
        <div className="border-4 border-lime-900 ">
        <div className="text-4xl underline underline-offset-4 font-bold font-poppins mt-14">Certificates</div>


        </div>


      </div>
    </div>
  )
}

export default CertificatesPage