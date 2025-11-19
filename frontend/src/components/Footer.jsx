const Footer = () => {
  return (
    // 1. Changed <div> to <footer> for better SEO
    <footer className="border-t border-slate-800 mt-16 pt-8 pb-8 text-center text-xs text-slate-500">
      
      {/* 2. Dynamic Year */}
      <span>© {new Date().getFullYear()} InboxBurner</span>

      {/* 3. Clickable Links with Hover effects */}
      <a href="#" className="mx-4 hover:text-slate-300 transition-colors">
        Terms
      </a>
      <a href="#" className="hover:text-slate-300 transition-colors">
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;