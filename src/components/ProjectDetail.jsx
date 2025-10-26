import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from './SEO';

const api = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`${api}/api/projects/${id}`).then(r=>r.json()).then(setProject).catch(()=>setProject(null));
  }, [id]);

  if (!project) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"><p className="text-[#666666]">Loading…</p></div>;

  return (
    <div className="bg-white">
      <SEO title={`${project.title} – Projects – Diwan Al‑Ardiya`} description={project.description || 'Materials supplied and project details.'} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-4">{project.title}</h1>
        <p className="text-[#666666] max-w-3xl">{project.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {(project.images || []).map((src, i) => (
            <img key={i} src={src} alt={`${project.title} image ${i+1}`} className="h-56 w-full object-cover rounded" loading="lazy" />
          ))}
        </div>
        {project.materials_used?.length > 0 && (
          <div className="mt-6">
            <h2 className="font-bold text-[#1A1A1A] mb-2">Materials used</h2>
            <ul className="list-disc pl-5 text-[#1A1A1A]">
              {project.materials_used.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
