import React from 'react';
import Navbar from './components/Navbar';
import StyleGuide from './components/StyleGuide';
import Wireframes from './components/Wireframes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
      <Navbar />
      <main className="pt-16">
        {/* Hero banner for presentation of brand direction */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
                  Diwan Al‑Ardiya Co.
                </h1>
                <p className="mt-4 text-lg text-[#666666] max-w-xl">
                  UI/UX style guide and wireframes for a responsive wholesale & retail building
                  materials website in Kuwait. Review and approve to proceed with full build.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#style" className="px-5 py-3 rounded-md bg-[#2E56B8] text-white font-semibold shadow hover:bg-[#2649a0]">View Style Guide</a>
                  <a href="#wireframes" className="px-5 py-3 rounded-md border border-gray-300 text-[#1A1A1A] font-semibold hover:bg-gray-50">See Wireframes</a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-100 via-white to-gray-100 border border-gray-200 p-4">
                  <div className="h-full w-full rounded-lg border border-dashed border-[#2E56B8]/40 grid place-items-center">
                    <div className="text-center">
                      <p className="text-[#2E56B8] font-bold">Hero Concept</p>
                      <p className="text-[#666666] text-sm mt-1 max-w-xs">
                        Full‑width image with overlay headline and primary CTA.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StyleGuide />
        <Wireframes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
