import React from 'react';
import SEO from './SEO';

const About = () => {
  return (
    <div className="bg-white">
      <SEO title="About Us – Diwan Al‑Ardiya" description="Our mission, values, and address in Kuwait." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A1A1A]">About Us</h1>
            <p className="mt-4 text-[#666666]">
              Diwan Al‑Ardiya Company for Wholesale & Retail supplies high‑quality building materials across Kuwait.
              Our mission is to deliver dependable products with exceptional service and logistics.
            </p>
            <ul className="mt-6 space-y-2 text-[#1A1A1A] list-disc pl-5">
              <li>Reliable sourcing of timber, plywood, steel, and hardware</li>
              <li>Trusted delivery and installation support</li>
              <li>Customer‑focused consultation for bulk supply</li>
            </ul>
            <div className="mt-8 p-5 rounded-lg border border-gray-200 bg-gray-50">
              <h2 className="font-bold text-[#1A1A1A]">Address</h2>
              <p className="text-[#666666] mt-1">East – Khalid Bin Al Waleed Street – Al Kadhimi Building No A9 – Second Floor – Office 20 – Kuwait</p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="warehouse team at Diwan Al‑Ardiya Kuwait"
              className="rounded-xl w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
