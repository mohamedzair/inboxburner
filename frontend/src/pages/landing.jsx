import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { BarChart3, MessageSquare, LayoutDashboard } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <HowItWorks />

      {/* Main Dark Section (Visuals + Bottom Columns) */}
      <div className="bg-slate-900 pt-20 pb-10 px-4 overflow-hidden">
        
        {/* Visual Showcase Section (The floating screens) */}
        <div className="max-w-6xl mx-auto mb-24 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            
            {/* Screen 1: Daily Digest */}
            <div className="bg-white rounded-xl p-4 shadow-2xl transform md:-rotate-6 md:translate-y-8 opacity-90">
              <div className="flex items-center gap-2 mb-3 border-b pb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-xs text-gray-400 ml-auto">Daily Digest</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                <div className="h-2 bg-slate-100 rounded w-full"></div>
                <div className="h-16 bg-blue-50 rounded w-full flex items-center justify-center text-blue-200">
                    <MessageSquare size={24} />
                </div>
              </div>
            </div>

            {/* Screen 2: Thread Summary (Center) */}
            <div className="bg-white rounded-xl p-6 shadow-2xl transform z-20 scale-110">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-sm text-slate-800">Thread Summary</h4>
                <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded">AI</span>
              </div>
              <div className="space-y-3">
                 <div className="h-2 bg-slate-100 rounded w-full"></div>
                 <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                 <div className="mt-4 flex justify-between items-end">
                    <div className="text-2xl font-bold text-slate-800">18%</div>
                    <div className="text-2xl font-bold text-slate-800">29%</div>
                 </div>
              </div>
            </div>

            {/* Screen 3: Dashboard */}
            <div className="bg-white rounded-xl p-4 shadow-2xl transform md:rotate-6 md:translate-y-8 opacity-90">
              <div className="flex items-center gap-2 mb-3 border-b pb-2">
                <span className="text-xs text-gray-400">Dashboard</span>
              </div>
              <div className="h-24 bg-slate-50 rounded w-full flex items-end justify-around px-2 pb-2">
                <div className="w-2 h-8 bg-blue-300 rounded-t"></div>
                <div className="w-2 h-12 bg-blue-400 rounded-t"></div>
                <div className="w-2 h-6 bg-blue-300 rounded-t"></div>
                <div className="w-2 h-16 bg-blue-500 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Columns Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 md:gap-8 relative z-10">
        </div>
        
          {/* Column 1: Features List */}
          <Features />
          {/* Column 2: CTA Form */}
          <CTA />
        
        <Footer />
      </div>
    </div>
  );
};

export default Landing;