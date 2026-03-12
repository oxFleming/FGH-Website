import React from 'react';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="relative w-full min-h-screen font-sans text-white bg-[#050505]">
      <main className="relative z-10 w-full">
        <Hero />
        
        {/* Spacer section to demonstrate scroll trigger parallax */}
        <section className="relative w-full h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-300 uppercase tracking-widest text-sm mb-4">Scroll Down</p>
            <div className="w-[1px] h-24 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
          </div>
        </section>
        
        {/* Additional Content Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center bg-black/80 backdrop-blur-md py-24">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">OUR VISION</h2>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              We believe in creating spaces that inspire, endure, and elevate the human experience. 
              Our commitment to sustainable practices and cutting-edge technology ensures that every 
              project we undertake is a testament to modern engineering.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
