import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from './SEO';

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const SidebarFilter = ({ values, onChange, defaults }) => {
  const [category, setCategory] = useState(defaults.category || '');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    onChange({ category, material_type: material, size });
  }, [category, material, size]);

  return (
    <aside className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1">Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2">
          <option value="">All</option>
          {values.categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1">Material Type</label>
        <input value={material} onChange={(e) => setMaterial(e.target.value)} placeholder="e.g., Softwood" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#1A1A1A] mb-1">Size</label>
        <input value={size} onChange={(e) => setSize(e.target.value)} placeholder="e.g., 18mm" className="w-full border border-gray-300 rounded-md px-3 py-2" />
      </div>
    </aside>
  );
};

const ProductCard = ({ p }) => (
  <Link to={`/products/${p.id}`} className="block rounded-xl overflow-hidden border border-gray-200 bg-white group">
    <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop'} alt={`${p.title} product Kuwait`} className="h-40 w-full object-cover group-hover:scale-[1.02] transition" loading="lazy" />
    <div className="p-4">
      <p className="font-semibold text-[#1A1A1A] group-hover:text-[#2E56B8]">{p.title}</p>
      <p className="text-sm text-[#666666] line-clamp-2">{p.description}</p>
      <span className="inline-block mt-2 text-xs text-white bg-[#2E56B8] px-2 py-1 rounded">{p.category}</span>
    </div>
  </Link>
);

const ProductList = () => {
  const qs = useQuery();
  const defaultCategory = qs.get('category') || '';

  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: defaultCategory });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${api}/api/categories`).then(r => r.json()).then(setCategories).catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.material_type) params.set('material_type', filters.material_type);
    if (filters.size) params.set('size', filters.size);

    fetch(`${api}/api/products?${params.toString()}`)
      .then(r => r.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [filters]);

  return (
    <div className="bg-white">
      <SEO title="Products List – Diwan Al‑Ardiya" description="Filter and browse building materials across categories." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <SidebarFilter values={{ categories }} onChange={setFilters} defaults={{ category: defaultCategory }} />
          </div>
          <div className="md:col-span-3">
            {loading ? (
              <p className="text-[#666666]">Loading products…</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
                {products.length === 0 && (
                  <p className="text-[#666666]">No products found. Adjust filters.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
