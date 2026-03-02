'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { guests } from '../../data/guests';
import Link from 'next/link';
import { MapPin } from "lucide-react";

export default function InvitePage() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params.get('name');

  const guest = guests.find(
    g => g?.name?.trim().toLowerCase() === name?.trim().toLowerCase()
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-50 p-6">
      
      {/* CARD */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-black
                      flex flex-col items-center text-center gap-4">

        {/* TITLE */}
        <h1 className="text-3xl font-bold">
          Welcome, {guest?.name || name}!
        </h1>

        {/* LOCATION ICON (NOW PART OF FLEX LAYOUT) */}
        <Link
          href="https://maps.app.goo.gl/SDirE17etSQ5hP3V7?g_st=ic"
          target="_blank"
          className="flex justify-center"
        >
          <MapPin size={48} className="w-12 h-12 text-pink-400 hover:text-pink-600 transition" />
        </Link>

        {/* INFO */}
        <div className='flex flex-row gap-2 items-center text-blue-500'><div>Seat Number:</div><p className='text-blue-500 text-xl font-bold'>{guest?.seat || 'N/A'}</p></div>
        <div className='flex flex-row gap-2 items-center'><div>Access Level: </div> <div className='text-blue-500 text-xl font-bold'>{guest?.access || 'N/A'}</div></div>

        {/* BUTTON */}
        <div className='border-3 border-red-800-800'>

           <button
             onClick={() => router.back()}
             className="mt-4 bg-gray-200 px-6 py-3  rounded-full hover:bg-gray-300">
             ← Go Back
           </button>
        </div>

      </div>
    </div>
  );
}