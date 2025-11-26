import { Shield, Mail, ArrowRight, FoldVertical } from 'lucide-react';

const Hero = ({ onOpenModal }) => {
  // Function to smooth scroll to the CTA section
  const scrollToCTA = () => {
    document.getElementById('join-waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-blue-50 min-h-screen flex flex-col relative overflow-hidden">
      {/* Semantic Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 grow flex flex-col">

        {/* Navbar */}
        <header className="flex justify-between items-center mb-16 lg:mb-24">
          <a href="/" className="flex items-center gap-2 text-slate-900 font-bold text-xl group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
            <div className="bg-blue-600 text-white p-1 rounded-full group-hover:bg-blue-700 transition-colors">
              <FoldVertical size={20} fill="currentColor" aria-hidden="true" />
            </div>
            <span>Gist</span>
          </a>

          <button
            type="button"
            onClick={scrollToCTA}
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-100 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all active:scale-95"
          >
            Join Waitlist
          </button>
        </header>

        {/* Main Grid Layout: Stacked on Mobile, Split on Desktop */}
        <main className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 my-auto">

          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-2xl lg:max-w-none">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Stop Drowning In <br className="hidden lg:block" /> Your Emails
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get a daily digest that highlights <span className="text-blue-600 font-semibold">what actually matters</span> and automatically archives the noise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={scrollToCTA}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all focus:ring-4 focus:ring-blue-600/30 active:scale-95 flex items-center justify-center gap-2"
                aria-label="Join the waitlist for InboxBurner"
              >
                Join Waitlist
                <ArrowRight size={20} />
              </button>

              {/* Optional Secondary Text or Social Proof could go here */}
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-2 sm:mt-0 px-4">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-blue-50"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-blue-50"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-500 border-2 border-blue-50"></div>
                </div>
                <p>100+ joined</p>
              </div>
            </div>
          </div>

          {/* Right Side: Abstract Illustration */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative" aria-hidden="true">
            {/* Background Blob Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Outer Orbit */}
              <div className="absolute inset-0 border border-blue-200 rounded-full opacity-60 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-blue-300 rounded-full opacity-40 animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Glowing Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative bg-linear-to-br from-blue-500 to-blue-600 p-10 sm:p-12 rounded-4xl shadow-2xl shadow-blue-900/20 transform rotate-6 hover:rotate-0 transition-all duration-700 ease-out hover:scale-105" onClick={onOpenModal}>
                  <Mail size={80} className="text-white drop-shadow-lg sm:w-24 sm:h-24" strokeWidth={1.5} />

                  {/* Floating Badge Decoration */}
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg animate-bounce delay-700">
                    <Shield className="text-green-500 w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </section>
  );
};

export default Hero;