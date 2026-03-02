'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function AcceptInvitationPage() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params.get('name'); // get name from URL

  const handleAccept = () => {
    router.push(`/invite/page?name=${encodeURIComponent(name)}`);
  };

  return (
    <div style={{
        backgroundImage: "url('/assets/invitepic.png')", // your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} className="min-h-screen flex items-center relative justify-center bg-purple-50 p-4">
      <div className="bg-white p-8 rounded-2xl absolute bottom-7 shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-black mb-6">Welcome, {name}!</h1>
        <p className="mb-6 text-black">Click below to view your invitation details</p>
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
