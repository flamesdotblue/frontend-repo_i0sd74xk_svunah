import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from './SEO';

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const SpecRow = ({ k, v }) => (
  <tr className="border-t">
    <td className="py-2 pr-4 text-sm text-[#666666]">{k}</td>
    <td className="py-2 text-sm text-[#1A1A1A]">{String(v)}</td>
  </tr>
);

const RequestQuoteForm = ({ productTitle }) => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', product: productTitle });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`${api}/api/quote`, {
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
    <form onSubmit={submit} className="rounded-xl border border-gray-200 p-5 bg-gray-50">
      <h3 className="font-bold text-[#1A1A1A] mb-3">Request Quote</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input required placeholder="Name" className="border border-gray-300 rounded-md px-3 py-2" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />
        <input placeholder="Company" className="border border-gray-300 rounded-md px-3 py-2" value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} />
        <input required type="email" placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
        <input placeholder="Phone" className="border border-gray-300 rounded-md px-3 py-2" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} />
        <select className="border border-gray-300 rounded-md px-3 py-2 sm:col-span-2" value={form.product} onChange={(e)=>setForm({...form,product:e.target.value})}>
          <option>{productTitle}</option>
        </select>
        <textarea placeholder="Message" className="border border-gray-300 rounded-md px-3 py-2 sm:col-span-2" rows={4} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}></textarea>
      </div>
      <button type="submit" className="mt-4 px-5 py-2.5 rounded-md bg-[#2E56B8] text-white font-semibold hover:bg-[#2649a0]">Submit</button>
      {status === 'success' && <p className="text-green-600 mt-3">Thanks! We received your request.</p>}
      {status === 'error' && <p className="text-red-600 mt-3">There was an issue. Please try again.</p>}
    </form>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${api}/api/products/${id}`).then(r=>r.json()).then(setProduct).catch(()=>setProduct(null)).finally(()=>setLoading(false));
  }, [id]);

  if (loading) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"><p className="text-[#666666]">Loading…</p></div>;
  if (!product) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"><p className="text-[#666666]">Product not found.</p></div>;

  return (
    <div className="bg-white">
      <SEO title={`${product.title} – Diwan Al‑Ardiya`} description={product.description || 'Product details and specifications.'} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop'} alt={`${product.title} photo`} className="rounded-lg w-full h-80 object-cover" />
            <div className="grid grid-cols-4 gap-2 mt-2">
              {(product.images || []).slice(0,4).map((src, i) => (
                <img key={i} src={src} alt={`${product.title} gallery ${i+1}`} className="h-20 w-full object-cover rounded" loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A1A1A]">{product.title}</h1>
            <p className="mt-2 text-[#666666]">{product.description}</p>
            <div className="mt-6 rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs || {}).map(([k,v]) => (
                    <SpecRow key={k} k={k} v={v} />
                  ))}
                  {product.size && <SpecRow k="Size" v={product.size} />}
                  {product.material_type && <SpecRow k="Material" v={product.material_type} />}
                  {product.weight && <SpecRow k="Weight" v={product.weight} />}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <RequestQuoteForm productTitle={product.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
