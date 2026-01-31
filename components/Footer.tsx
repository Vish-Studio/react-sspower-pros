import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 text-center text-xs text-slate-600 font-medium">
      <div className="max-w-6xl mx-auto px-4">
        <p className="mb-2">© {new Date().getFullYear()} SS Power Pros. All rights reserved.</p>
        <p className="text-slate-700">
            Designed by <span className="text-slate-500 font-bold hover:text-white transition-colors cursor-pointer">VISH Studio</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;