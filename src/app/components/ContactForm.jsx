'use client'

import { useFormState } from 'react-dom';
import React, { useEffect } from 'react';
import { toast } from 'sonner';
import Mail from "../../../public/mail.png";
import Image from 'next/image';


export default function ContactForm({action}){
  const [state, handleSubmit] = useFormState(action, {});

return (
  <div className="flex flex-col sm:flex-row h-screen absolute top-0 left-0 w-screen">
  <div className="sm:w-[30%] sm:top-0 relative -top-16 bg-orange-100 flex justify-center">
    <Image
      priority

      src={Mail}
      alt="Background Image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-[70%] flex flex-col items-center pl-[6rem] sm:pl-6">
    <div className="sm:text-5xl text-xl underline underline-offset-4 font-semibold font-poppins mt-14 mb-5 text-amber-600">
      Reach me out!
    </div>
    <div className="mt-9 w-64 bg-orange-500 border p-4 shadow-md shadow-slate-600 rounded-lg ml-8 hover:transform hover:scale-105 transition-all duration-500 ease-in-out bg-opacity-10 flex flex-col sm:w-[64%] justify-center gap-4">
      <form action={handleSubmit}>
        <div className="flex flex-col items-center py-2 gap-12">
          <input
            id="form-name"
            name="username"
            autoComplete="name"
            maxLength={50}
            className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            required
            placeholder="Name"
          />
          <input
            id="form-email"
            name="email"
            autoComplete="email"
            maxLength={80}
            type="email"
            className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
            placeholder="Email"
          />
          <input
            id="form-phone"
            name="number"
            autoComplete="tel"
            maxLength={20}
            type="tel"
            className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
            placeholder="Phone Number"
          />
          <textarea
            id="form-message"
            name="message"
            rows={2}
            className="appearance-none border-b-2 border-orange-500 bg-transparent w-80 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            required
            placeholder="Message"
          />
         
          
        </div>
      </form>
    </div>
  </div>
</div>);

}