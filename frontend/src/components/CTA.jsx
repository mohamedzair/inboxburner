import React from 'react';

const CTA = () => {
  return (
    <div className="text-white max-w-4xl mx-auto px-4">
      <p className="text-slate-400 mb-4 text-sm text-center">
        Join our early access waitlist for updates.
      </p>
      
      <div className="flex flex-col gap-3">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default CTA;