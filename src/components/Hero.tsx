import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/hero-video-1.mp4"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 
          ref={headlineRef} 
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white tracking-tight"
        >
          Precision at Scale
        </h1>
      </div>
    </section>
  );
}
