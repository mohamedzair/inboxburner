import React from 'react';

const Features = () => {
  // Feature data array for cleaner code
  const features = [
    {
      title: "Instant Privacy",
      desc: "Generate a secure email address in seconds. No personal data required, ever.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      )
    },
    {
      title: "Lightning Fast",
      desc: "Messages arrive instantly. The cleanest interface for viewing emails without bloat.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      )
    },
    {
      title: "Auto-Delete",
      desc: "Emails are automatically wiped after a set period. Leave no digital footprint.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      )
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">Why InboxBurner?</h2>
        <p className="text-slate-500">Everything you need to protect your digital privacy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div key={index} className="p-8 border border-slate-800 rounded-xl bg-slate-900/50 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-slate-200">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;