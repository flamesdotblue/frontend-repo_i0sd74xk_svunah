import React from 'react';
import SEO from './SEO';
import { Truck, Wrench, ClipboardList } from 'lucide-react';

const ServiceCard = ({ Icon, title, text }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6">
    <div className="h-10 w-10 rounded bg-blue-50 flex items-center justify-center text-[#2E56B8]">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">{title}</h3>
    <p className="text-sm text-[#666666] mt-1">{text}</p>
    <button className="mt-4 px-4 py-2 rounded-md bg-[#2E56B8] text-white font-semibold hover:bg-[#2649a0]">Learn More</button>
  </div>
);

const Services = () => {
  return (
    <div className="bg-white">
      <SEO title="Services – Diwan Al‑Ardiya" description="Delivery & Logistics, Installation Support, and Bulk Supply Consultation." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-6">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard Icon={Truck} title="Delivery & Logistics" text="Reliable deliveries across Kuwait with coordinated scheduling." />
          <ServiceCard Icon={Wrench} title="Installation Support" text="Guidance for on-site installation and material handling." />
          <ServiceCard Icon={ClipboardList} title="Bulk Supply Consultation" text="Plan cost‑effective bulk orders tailored to your project." />
        </div>
      </div>
    </div>
  );
};

export default Services;
