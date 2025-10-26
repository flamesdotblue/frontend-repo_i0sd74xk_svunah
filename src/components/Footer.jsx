import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-[#2E56B8]" aria-hidden="true" />
            <div>
              <p className="font-bold">Diwan Al‑Ardiya Co.</p>
              <p className="text-sm text-gray-300">Wholesale & Retail Building Materials</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-gray-300">
            <a href="#style" className="hover:text-white">Style Guide</a>
            <a href="#wireframes" className="hover:text-white">Wireframes</a>
            <a href="#next" className="hover:text-white">Next Steps</a>
          </nav>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-sm text-gray-400">
          © {year} Diwan Al‑Ardiya Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
