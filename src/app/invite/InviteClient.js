'use client'
export const dynamic = 'force-dynamic';

import { useRouter, useSearchParams } from 'next/navigation';
import { guests } from '../data/guests';
import { MapPin } from "lucide-react";

export default function InvitePage() {
  const router = useRouter();
  const params = useSearchParams();

  // SAFE fallback
  const name = params?.get('name') || '';

  // Prevent crash if name is null
  const guest = guests.find(
    (g) =>
      g?.name?.trim().toLowerCase() ===
      name.trim().toLowerCase()
  );

  return (
    <div className="min-h-screen flex justify-center items-center bg-amber-50 p-6">

      {/* CARD */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-black flex flex-col items-center text-center gap-4">

        {/* TITLE */}
        <h1 className="text-3xl font-bold">
          Welcome, {guest?.name || name || 'Guest'}!
        </h1>

        {/* LOCATION ICON */}
        <a
          href="https://www.google.com/maps/place/Iceland+Civic+Centre/@6.6028139,3.2897771,17z/data=!4m14!1m7!3m6!1s0x103b91a62db163b7:0x46887f7328dff9c9!2sIceland+Civic+Centre!8m2!3d6.6028139!4d3.292352!16s%2Fg%2F11h9mlr86n!3m5!1s0x103b91a62db163b7:0x46887f7328dff9c9!8m2!3d6.6028139!4d3.292352!16s%2Fg%2F11h9mlr86n!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <MapPin
            size={48}
            className="text-amber-700 hover:text-amber-400 transition"
          />
        </a>

        
        <div className="flex flex-row gap-2 items-center">
          <span>Venue:</span>
          <span className="text-blue-500 text-xl font-bold">
            Iceland Civic Center
          </span>
        </div>
        {/* INFO */}
        <div className="flex flex-row gap-2 items-center">
          <span>Date:</span>
          <span className="text-blue-500 text-xl font-bold">
            June 13, 2026
          </span>
        </div>
        {/* INFO */}
        <div className="flex flex-row gap-2 items-center">
          <span>Seat Number:</span>
          <span className="text-blue-500 text-xl font-bold">
            {guest?.seat || 'N/A'}
          </span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span>Access Level:</span>
          <span className="text-blue-500 text-xl font-bold">
            {guest?.access || 'N/A'}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => router.back()}
          className="mt-4 bg-gray-200 px-6 py-3 rounded-full hover:bg-gray-300 transition"
        >
          ← Go Back
        </button>

      </div>
    </div>
  );
}