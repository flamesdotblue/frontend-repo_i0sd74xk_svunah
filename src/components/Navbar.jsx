import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-[#2E56B8]" aria-hidden="true" />
          <span className="text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight">
            Diwan Al‑Ardiya Co.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#style" className="text-[#1A1A1A] hover:text-[#2E56B8] font-medium">Style Guide</a>
          <a href="#wireframes" className="text-[#1A1A1A] hover:text-[#2E56B8] font-medium">Wireframes</a>
          <a href="#next" className="text-[#1A1A1A] hover:text-[#2E56B8] font-medium">Next Steps</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
