'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function AcceptClient() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params?.get('name') || 'Guest';

  const handleAccept = () => {
    router.push(`/invite/page?name=${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/assets/invitepic.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-[80%]">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Welcome, {name}!
        </h1>

        <p className="mb-6 text-black">
          Click below to view your invitation details
        </p>

        <button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-full flex items-center justify-center gap-2"
        >
          Accept Invitation
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}