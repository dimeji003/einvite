"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { guests } from "../data/guests";

export default function InvitePage() {
  const params = useSearchParams();
  const name = params.get("name");
  const router = useRouter();

  const guest = guests.find(
    g => g.name === name?.toLowerCase()
  );

  if (!guest) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl">Invitation not found</h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center p-8">
          <h1 className="text-3xl font-bold">
            Welcome, {guest.name}!
          </h1>
          <p>You are cordially invited to celebrate with us</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 text-black">

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold">Date</h3>
            <p>Saturday, March 15, 2026</p>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-semibold">Time</h3>
            <p>6:00 PM – 11:00 PM</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold">Venue</h3>
            <p>The Grand Ballroom</p>
            <p>123 Celebration Avenue</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">Your Seat</h3>
            <p>{guest.seat}</p>
            <p className="text-sm text-gray-500">
              Access Level: {guest.access}
            </p>
          </div>

        <button onClick={() => router.back()}>
          ← Go Back
        </button>
        </div>

        
      </div>
    </main>
  );
}