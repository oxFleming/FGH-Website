import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // High-end reveal animation for the text
      gsap.fromTo(
        textRefs.current,
        { yPercent: 120, opacity: 0, skewY: 5 },
        { 
          yPercent: 0, 
          opacity: 1, 
          skewY: 0,
          duration: 1.5, 
          stagger: 0.15, 
          ease: 'expo.out', 
          delay: 0.5 
        }
      );

      // Premium background video effect on scroll (scale down and blur slightly)
      gsap.to('.global-video', {
        scale: 1.1,
        filter: 'blur(10px)',
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className="relative w-full min-h-screen font-sans text-white bg-[#050505]">
      
      {/* Fixed Global Video Background */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Dark Overlay for text readability */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="global-video absolute top-0 left-0 w-full h-full object-cover scale-105 transform-gpu"
          src="https://videos.pexels.com/video-files/3205400/3205400-uhd_2560_1440_25fps.mp4"
        />
      </div>

      {/* Main Content Wrapper */}
      <main className="relative z-10 w-full">
        
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full h-screen flex items-center justify-start">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start mt-20">
            
            <div className="overflow-hidden pb-2 mb-6">
              <p ref={addToRefs} className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-300 font-medium">
                Engineering The Future
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <div className="overflow-hidden pb-2">
                <h1 ref={addToRefs} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-white">
                  BUILDING
                </h1>
              </div>
              <div className="overflow-hidden pb-2">
                <h1 ref={addToRefs} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                  TOMORROW'S
                </h1>
              </div>
              <div className="overflow-hidden pb-4">
                <h1 ref={addToRefs} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-white">
                  LANDSCAPES
                </h1>
              </div>
            </div>

            <div className="overflow-hidden pb-2 mb-12">
              <p ref={addToRefs} className="text-lg md:text-xl text-gray-300 max-w-xl font-light leading-relaxed">
                We engineer monumental structures with precision, scale, and uncompromising quality. Redefining skylines across the globe.
              </p>
            </div>

            <div className="overflow-hidden pb-2">
              <button ref={addToRefs} className="group relative px-8 py-4 bg-white text-black font-sans text-sm font-semibold uppercase tracking-widest overflow-hidden pointer-events-auto">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Discover Our Work</span>
                <div className="absolute inset-0 bg-neutral-900 transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100 z-0"></div>
              </button>
            </div>

          </div>
        </section>

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
