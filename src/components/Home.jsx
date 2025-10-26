import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const FeatureCard = ({ title, text, to, imgAlt }) => (
  <div className="rounded-xl border border-gray-200 bg-white overflow-hidden flex flex-col">
    <img
      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
      alt={imgAlt}
      className="h-40 w-full object-cover"
      loading="lazy"
    />
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-lg font-bold text-[#1A1A1A]">{title}</h3>
      <p className="text-sm text-[#666666] mt-1 flex-1">{text}</p>
      <Link to={to} className="mt-4 inline-block px-4 py-2 rounded-md bg-[#2E56B8] text-white font-semibold hover:bg-[#2649a0]">
        Explore
      </Link>
    </div>
  </div>
);

const ProjectPreview = ({ title, to }) => (
  <Link to={to} className="group block rounded-xl overflow-hidden border border-gray-200 bg-white">
    <img
      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
      alt="construction site project Kuwait"
      className="h-48 w-full object-cover group-hover:scale-[1.02] transition"
      loading="lazy"
    />
    <div className="p-4">
      <p className="font-semibold text-[#1A1A1A] group-hover:text-[#2E56B8]">{title}</p>
    </div>
  </Link>
);

const Home = () => {
  return (
    <>
      <SEO
        title="Diwan Al‑Ardiya – Wholesale & Retail Building Materials Kuwait"
        description="Leading wholesale & retail supplier of timber, steel, fixings and HVAC services in Kuwait."
      />
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="Kuwait construction site at sunrise"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white max-w-3xl">
            Quality Building Materials & Wholesale Supply in Kuwait
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Supplying timber, plywood, steel, rebar, and hardware across Kuwait.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/products" className="px-5 py-3 rounded-md bg-[#2E56B8] text-white font-semibold hover:bg-[#2649a0]">
              View Products
            </Link>
            <Link to="/contact" className="px-5 py-3 rounded-md bg-white text-[#1A1A1A] font-semibold hover:bg-gray-50">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Products"
              text="Explore categories across Timber & Plywood, Steel & Rebar, Fixings & Hardware, HVAC & Installation."
              to="/products"
              imgAlt="stacked plywood sheets wholesale Kuwait"
            />
            <FeatureCard
              title="Projects"
              text="See our recent construction projects and materials supplied across Kuwait."
              to="/projects"
              imgAlt="steel beams on site Kuwait"
            />
            <FeatureCard
              title="Services"
              text="Delivery & Logistics, Installation Support, and Bulk Supply Consultation."
              to="/services"
              imgAlt="logistics truck delivering materials Kuwait"
            />
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-[#1A1A1A]">Recent Projects</h2>
            <Link to="/projects" className="text-[#2E56B8] font-semibold hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectPreview title="Commercial Tower – Kuwait City" to="/projects/placeholder-1" />
            <ProjectPreview title="Residential Complex – Hawally" to="/projects/placeholder-2" />
            <ProjectPreview title="Warehouse Expansion – Shuwaikh" to="/projects/placeholder-3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
