"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [inputName, setInputName] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      // Navigate to Accept Invitation page with the name in query
      router.push(`/invite/accept?name=${encodeURIComponent(inputName.trim())}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl text-black font-bold mb-4">Special Celebration</h1>
        <p className="text-gray-600 mb-6">Enter your name to view your invitation</p>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Your full name"
          className="w-full px-4 py-3 text-black border-b-2 border-gray-300 focus:border-pink-400 outline-none text-center"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-full flex items-center justify-center gap-2"
        >
          VIEW INVITATION
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}