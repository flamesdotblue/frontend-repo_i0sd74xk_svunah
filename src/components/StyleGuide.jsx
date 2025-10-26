import React from 'react';

const ColorSwatch = ({ hex, name }) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200">
    <div
      className="h-12 w-12 rounded"
      style={{ backgroundColor: hex }}
      aria-hidden="true"
    />
    <div>
      <p className="font-semibold text-[#1A1A1A]">{name}</p>
      <p className="text-sm text-[#666666]">{hex}</p>
    </div>
  </div>
);

const TypeSpecimen = ({ title, fontClass, sample, note }) => (
  <div>
    <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">{title}</p>
    <p className={`${fontClass} text-2xl sm:text-3xl font-bold text-[#1A1A1A]`}>{sample}</p>
    <p className="text-sm text-[#666666] mt-1">{note}</p>
  </div>
);

const StyleGuide = () => {
  return (
    <section id="style" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1A1A1A]">
            UI/UX Style Guide
          </h2>
          <p className="mt-3 text-[#666666] max-w-2xl">
            Foundation for Diwan Al‑Ardiya Co. website covering brand colors, typography,
            imagery guidelines, components, and spacing for a consistent, professional look.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colors */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ColorSwatch name="Primary Blue" hex="#2E56B8" />
              <ColorSwatch name="Secondary Grey" hex="#666666" />
              <ColorSwatch name="Background White" hex="#FFFFFF" />
              <ColorSwatch name="Accent Charcoal" hex="#1A1A1A" />
            </div>
          </div>

          {/* Typography */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Typography</h3>
            <div className="space-y-6">
              <TypeSpecimen
                title="Headings"
                fontClass="font-sans"
                sample="Quality Building Materials & Wholesale Supply in Kuwait"
                note="Bold sans-serif (e.g., Montserrat or Poppins). Use for H1–H3."
              />
              <TypeSpecimen
                title="Body"
                fontClass="font-sans"
                sample="We supply timber, plywood, steel, rebar, fixings, and HVAC products with dependable logistics across Kuwait."
                note="Clean sans-serif (e.g., Roboto or Open Sans). Use for paragraphs, lists, UI labels."
              />
            </div>
          </div>

          {/* Imagery */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Imagery</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#1A1A1A]">
              <li>Use high‑quality photos of materials: timber, plywood, steel, rebar.</li>
              <li>Include construction scenes to convey scale and trust.</li>
              <li>Favor warm wood tones and metallic steel tones; avoid heavy filters.</li>
              <li>Add descriptive alt text (e.g., “stacked plywood sheets wholesale Kuwait”).</li>
              <li>Lazy‑load large images for performance and fast page loads.</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Buttons</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-5 py-2.5 rounded-md bg-[#2E56B8] text-white font-semibold shadow hover:bg-[#2649a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E56B8]">
                Primary Action
              </button>
              <button className="px-5 py-2.5 rounded-md border border-gray-300 text-[#1A1A1A] font-semibold hover:bg-gray-50">
                Secondary
              </button>
              <button className="px-4 py-2 rounded-full text-[#2E56B8] hover:bg-blue-50 font-medium">
                Text Link
              </button>
            </div>
            <p className="text-sm text-[#666666] mt-3">
              Primary buttons use #2E56B8 with white text; hover is a slightly darker blue.
            </p>
          </div>
        </div>

        {/* Spacing and layout */}
        <div className="mt-8 rounded-xl border border-gray-200 p-6 bg-white">
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Layout & Spacing</h3>
          <p className="text-[#666666] max-w-3xl">
            Use ample white space with consistent margins/padding. Grids adapt to 1‑column on mobile,
            2‑column on tablets, and 3+ columns on desktop. Navigation is fixed to the top and collapses
            to a hamburger menu on small screens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
