import React from 'react';
import { Lock, Brain, CheckCircle2 } from 'lucide-react';


const steps = [
  {
    id: 1,
    icon: <Lock size={28} />,
    title: "Connect Your Inbox",
    desc: "Securely link your Gmail account via OAuth. We never store your password or read personal emails."
  },
  {
    id: 2,
    icon: <Brain size={28} />,
    title: "AI Analysis",
    desc: "Our algorithms scan your incoming stream, separating the signal from the noise in real-time."
  },
  {
    id: 3,
    icon: <CheckCircle2 size={28} />,
    title: "Daily Digest",
    desc: "Receive a single, clean summary of what matters every morning. Archive the rest with one click."
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            From Chaos to Clarity
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Three simple steps to reclaim your time and sanity.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid md:grid-cols-3 gap-12">

          {/* The Connector Line (Visible on Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-blue-100 via-blue-200 to-blue-100 -z-10 transform -translate-y-1/2"></div>

          {/* Mapping Data to Components */}
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center group">

              {/* Icon Circle */}
              <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-50 flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-100 group-hover:scale-110 transition-all duration-300 z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:bg-blue-700 transition-colors">
                  {step.icon}
                </div>

                {/* Step Number Badge */}
                <div className="absolute top-0 right-0 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                  {index + 1}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;