import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Ensure this path is correct

const CTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleJoin = async () => {
    if (!email) return; // Don't submit empty emails

    setStatus('loading');

    // 1. Send to Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email: email }]);

    // 2. Handle response
    if (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('Something went wrong or email already exists.');
    } else {
      setStatus('success');
      setEmail(''); // Clear input
      // Optional: You can alert or just leave the button as "Joined!"
    }
  };

  return (
    <div id="join-waitlist" className="text-white max-w-4xl mx-auto px-4">
      <p className="text-slate-400 mb-4 text-sm text-center">
        Join our early access waitlist for updates.
      </p>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 disabled:opacity-50"
        />
        <button
          onClick={handleJoin}
          disabled={status === 'loading' || status === 'success'}
          className={`w-full font-bold py-3 rounded-lg transition-colors ${status === 'success'
            ? 'bg-blue-800 hover:bg-blue-900 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
        >
          {status === 'loading' && 'Joining...'}
          {status === 'success' && 'You are on the list!'}
          {status === 'error' && 'Try Again'}
          {status === 'idle' && 'Join Now'}
        </button>
      </div>
    </div>
  );
};

export default CTA;