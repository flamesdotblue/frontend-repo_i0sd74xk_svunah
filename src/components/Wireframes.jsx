import React from 'react';

const WireCard = ({ title, children }) => (
  <div className="rounded-xl border border-dashed border-gray-300 bg-white p-5">
    <h4 className="text-lg font-bold text-[#1A1A1A] mb-4">{title}</h4>
    {children}
  </div>
);

const Placeholder = ({ className }) => (
  <div className={`bg-gray-200/70 rounded ${className}`} aria-hidden="true" />
);

const Wireframes = () => {
  return (
    <section id="wireframes" className="scroll-mt-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            Wireframes (Key Screens)
          </h2>
          <p className="mt-3 text-[#666666] max-w-2xl">
            Low‑fidelity layouts describing content structure and hierarchy before visual design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Home */}
          <WireCard title="Home">
            <div className="space-y-4">
              <Placeholder className="h-10 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Placeholder className="h-48 w-full" />
                <div className="space-y-3">
                  <Placeholder className="h-6 w-3/4" />
                  <Placeholder className="h-4 w-2/3" />
                  <div className="flex gap-3">
                    <Placeholder className="h-10 w-28" />
                    <Placeholder className="h-10 w-28" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Placeholder className="h-28" />
                <Placeholder className="h-28" />
                <Placeholder className="h-28" />
              </div>
            </div>
          </WireCard>

          {/* Products List */}
          <WireCard title="Products List + Filters">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1 space-y-3">
                <Placeholder className="h-6 w-2/3" />
                <Placeholder className="h-24 w-full" />
                <Placeholder className="h-24 w-full" />
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Placeholder className="h-28 w-full" />
                    <Placeholder className="h-4 w-3/4" />
                    <Placeholder className="h-4 w-1/2" />
                    <Placeholder className="h-8 w-28" />
                  </div>
                ))}
              </div>
            </div>
          </WireCard>

          {/* Product Detail */}
          <WireCard title="Product Detail + Request Quote">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Placeholder className="h-56 w-full" />
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Placeholder key={i} className="h-16" />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <Placeholder className="h-6 w-3/4" />
                <Placeholder className="h-4 w-full" />
                <Placeholder className="h-4 w-5/6" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Placeholder key={i} className="h-10 w-full" />
                  ))}
                </div>
                <div className="flex gap-3">
                  <Placeholder className="h-10 w-32" />
                  <Placeholder className="h-10 w-32" />
                </div>
              </div>
            </div>
          </WireCard>

          {/* Contact */}
          <WireCard title="Contact + Map + Form">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Placeholder className="h-6 w-2/3" />
                <Placeholder className="h-4 w-5/6" />
                <Placeholder className="h-4 w-4/6" />
                <Placeholder className="h-56 w-full" />
              </div>
              <div className="space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Placeholder key={i} className="h-10 w-full" />
                ))}
                <Placeholder className="h-12 w-40" />
              </div>
            </div>
          </WireCard>
        </div>

        <div id="next" className="mt-10 rounded-xl bg-white border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Next Steps (After Approval)</h3>
          <ol className="list-decimal pl-6 space-y-2 text-[#1A1A1A]">
            <li>Build backend endpoints for product, project, and quote form data.</li>
            <li>Implement responsive pages: Home, About, Products, Projects, Services, Contact.</li>
            <li>Add filterable product catalog with category, material, and size facets.</li>
            <li>Connect Request Quote form to email and database logging.</li>
            <li>Set SEO titles/meta, sitemap, and performance optimization with lazy loading.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Wireframes;
