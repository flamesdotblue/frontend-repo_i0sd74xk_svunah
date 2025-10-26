import React, { useState } from 'react';
import SEO from './SEO';

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', interest: '' });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${api}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) setStatus('success'); else setStatus('error');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      <SEO title="Contact – Diwan Al‑Ardiya" description="Get in touch for product quotes, services, and general enquiries." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A1A1A]">Contact Us</h1>
            <p className="mt-2 text-[#666666]">East – Khalid Bin Al Waleed Street – Al Kadhimi Building No A9 – Second Floor – Office 20 – Kuwait</p>
            <p className="mt-2 text-[#666666]">Phone: +965 0000 0000 • Email: info@diwanardiya.com.kw</p>
            <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="Google Map Kuwait"
                src="https://www.google.com/maps?q=Kuwait%20City&z=12&output=embed"
                className="w-full h-72"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <form onSubmit={submit} className="rounded-xl border border-gray-200 p-5 bg-gray-50">
              <h2 className="font-bold text-[#1A1A1A] mb-3">Send a message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input required placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
                <input placeholder="Company" className="border border-gray-300 rounded-md px-3 py-2" value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} />
                <input required type="email" placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
                <input placeholder="Phone" className="border border-gray-300 rounded-md px-3 py-2" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
                <select className="border border-gray-300 rounded-md px-3 py-2 sm:col-span-2" value={form.interest} onChange={(e)=>setForm({...form,interest:e.target.value})}>
                  <option value="">Service/Product interest</option>
                  <option>Timber & Plywood</option>
                  <option>Steel & Rebar</option>
                  <option>Fixings & Hardware</option>
                  <option>HVAC & Installation</option>
                  <option>Delivery & Logistics</option>
                  <option>Installation Support</option>
                </select>
                <textarea required placeholder="Message" className="border border-gray-300 rounded-md px-3 py-2 sm:col-span-2" rows={4} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}></textarea>
              </div>
              <button type="submit" className="mt-4 px-5 py-2.5 rounded-md bg-[#2E56B8] text-white font-semibold hover:bg-[#2649a0]">Submit</button>
              {status === 'success' && <p className="text-green-600 mt-3">Thanks! We received your message.</p>}
              {status === 'error' && <p className="text-red-600 mt-3">There was an issue. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
