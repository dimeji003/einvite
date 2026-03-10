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
    <div className="min-h-screen flex justify-center items-center bg-pink-50 p-6">

      {/* CARD */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-black flex flex-col items-center text-center gap-4">

        {/* TITLE */}
        <h1 className="text-3xl font-bold">
          Welcome, {guest?.name || name || 'Guest'}!
        </h1>

        {/* LOCATION ICON */}
        <a
          href="https://maps.app.goo.gl/SDirE17etSQ5hP3V7?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <MapPin
            size={48}
            className="text-pink-400 hover:text-pink-600 transition"
          />
        </a>

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