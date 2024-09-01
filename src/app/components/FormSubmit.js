'use client';
import {useFormStatus} from 'react-dom';
import Link from 'next/link';

export default function FormSubmit({btn1, href2, msg}){
    const status = useFormStatus();

    if(status.pending){
        return <p className='text-SecondaryPurple font-medium text-lg animate-pulse'>{msg}</p>
    }

    return(
       <button
            className="rounded-lg py-2 px-5 text border-2 bg-orange-400"
            type="submit"
           
          >
           Connect
          </button> 
    )}