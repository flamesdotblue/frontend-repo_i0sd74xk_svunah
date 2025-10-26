import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const CategoryCard = ({ title, to, imgAlt }) => (
  <Link to={to} className="rounded-xl border border-gray-200 bg-white overflow-hidden block group">
    <img
      src="https://images.unsplash.com/photo-1610484826917-0f101a2423f1?q=80&w=1200&auto=format&fit=crop"
      alt={imgAlt}
      className="h-40 w-full object-cover group-hover:scale-[1.02] transition"
      loading="lazy"
    />
    <div className="p-5">
      <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#2E56B8]">{title}</h3>
      <p className="text-sm text-[#666666] mt-1">Explore inventory and request a quote.</p>
    </div>
  </Link>
);

const Products = () => {
  return (
    <div className="bg-white">
      <SEO title="Products – Diwan Al‑Ardiya" description="Explore product categories: Timber & Plywood, Steel & Rebar, Fixings & Hardware, HVAC & Installation." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-6">Product Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard title="Timber & Plywood" to="/products/list?category=Timber%20%26%20Plywood" imgAlt="timber plywood sheets Kuwait" />
          <CategoryCard title="Steel & Rebar" to="/products/list?category=Steel%20%26%20Rebar" imgAlt="steel and rebar Kuwait" />
          <CategoryCard title="Fixings & Hardware" to="/products/list?category=Fixings%20%26%20Hardware" imgAlt="construction fixings hardware Kuwait" />
          <CategoryCard title="HVAC & Installation" to="/products/list?category=HVAC%20%26%20Installation" imgAlt="HVAC ducts installation Kuwait" />
        </div>
      </div>
    </div>
  );
};

export default Products;
