"use client";
import React from 'react'
import Typewriter from "typewriter-effect";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home'); 
    }, 13000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-300 to-blue-400 ">
    <div className="text-center">
    <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString("<span class='text-3xl font-bold font-typewriter'>Hey, there!</span>")
        .deleteAll()
        .typeString("<span class='text-3xl font-bold font-typewriter'>I am Devanshee Ramanuj.</span>")
        .deleteAll()
        .typeString("<span class='text-3xl font-bold font-typewriter'>Let's dive in.</span>")
        .deleteAll()
        .start();
    }}
    options={{
      html: true, // Enable HTML tags in strings
      cursor: '', //For custom cursor
    }}
  />
    </div>
  </div>
  )
}

