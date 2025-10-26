import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${api}/api/projects`).then(r=>r.json()).then(setProjects).catch(()=>setProjects([]));
  }, []);

  return (
    <div className="bg-white">
      <SEO title="Projects – Diwan Al‑Ardiya" description="Project gallery and case studies from across Kuwait." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="block rounded-xl border border-gray-200 overflow-hidden group bg-white">
              <img src={p.images?.[0] || 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop'} alt={`${p.title} project Kuwait`} className="h-48 w-full object-cover group-hover:scale-[1.02] transition" loading="lazy" />
              <div className="p-4">
                <p className="font-semibold text-[#1A1A1A] group-hover:text-[#2E56B8]">{p.title}</p>
              </div>
            </Link>
          ))}
          {projects.length === 0 && (
            <p className="text-[#666666]">No projects yet. Add some via the CMS API.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
