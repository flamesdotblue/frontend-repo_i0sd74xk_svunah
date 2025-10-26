import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutNavbar from './components/LayoutNavbar';
import LayoutFooter from './components/LayoutFooter';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#1A1A1A] font-sans">
        <LayoutNavbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/list" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <LayoutFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
