import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // --- SUPABASE CONNECTION HERE ---
    const { error } = await supabase
      .from('waitlist') // Matches the table name we created
      .insert([{ email }]);

    if (error) {
      console.error('Error:', error);
      setStatus('error'); // Likely duplicate email
    } else {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setEmail('');
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
        <p className="text-slate-400 mb-6">Get early access when we launch.</p>

        {status === 'success' ? (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center font-medium">
            You're on the list! 🚀
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
            >
              {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Join Now'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. You might already be signed up.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;