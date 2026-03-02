'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function AcceptInvitationButton({ className }) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/invite/page'); // navigate to the invitation page
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[100%] bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 px-6 rounded-full font-medium hover:from-pink-500 hover:to-rose-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${className}`}
    >
      Accept Invitation
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}