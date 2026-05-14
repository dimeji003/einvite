'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function AcceptClient() {
  const router = useRouter();
  const params = useSearchParams();
  const name = params?.get('name') || 'Guest';

  const handleAccept = () => {
    router.push(`/invite?name=${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="min-h-dvh relative flex items-center justify-center p-4 "
      style={{
        backgroundImage: "url('/assets/riskat.png')",
        backgroundSize: 'cover',
        backgroundPosition: '10% center',
        backgroundRepeat: 'no-repeat',
       
        
      }}
    >
      <style jsx>{`
    @media (min-width: 768px) {
      div {
        background-image: url('/assets/riskatlaptop.png') !important;
        
        backgroundSize: 'cover',
      }
    }
  `}</style>
      <div className="bg-white absolute md:bottom-48 bottom-36 left-48 md:left-auto md:right-12  -translate-x-1/2 md:translate-x-0 p-6 md:p-8 right-12 rounded-2xl shadow-lg text-center max-w-md w-[80%]">
        <h1 className="md:text-3xl text-2xl font-bold mb-6 text-black">
          Welcome, {name}!
        </h1>

        <p className="mb-6 text-black">
          Click below to view your invitation details
        </p>

        <button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-amber-800 to-amber-950 text-white py-3 rounded-full flex items-center justify-center gap-2"
        >
          Accept Invitation
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}