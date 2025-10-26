import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LayoutNavbar = () => {
  const [open, setOpen] = useState(false);
  const linkCls = ({ isActive }) => `px-3 py-2 rounded-md font-medium ${isActive ? 'text-[#2E56B8]' : 'text-[#1A1A1A] hover:text-[#2E56B8]'}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-[#2E56B8]" aria-hidden="true" />
          <span className="text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight">Diwan Al‑Ardiya Co.</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 text-sm">
          <NavLink to="/products" className={linkCls}>Products</NavLink>
          <NavLink to="/projects" className={linkCls}>Projects</NavLink>
          <NavLink to="/services" className={linkCls}>Services</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 text-[#1A1A1A]">
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-1 gap-2 text-sm">
            <NavLink to="/products" className={linkCls} onClick={()=>setOpen(false)}>Products</NavLink>
            <NavLink to="/projects" className={linkCls} onClick={()=>setOpen(false)}>Projects</NavLink>
            <NavLink to="/services" className={linkCls} onClick={()=>setOpen(false)}>Services</NavLink>
            <NavLink to="/about" className={linkCls} onClick={()=>setOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={linkCls} onClick={()=>setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default LayoutNavbar;
