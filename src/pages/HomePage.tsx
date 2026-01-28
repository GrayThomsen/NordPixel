import React, { useRef, useEffect } from 'react';
import { Button } from '@components/Button';
import { useIsMobile } from '@hooks/useIsMobile';
import * as THREE from 'three';

/**
 * Simple animated Three.js background for the hero section
 */
const HeroCanvas: React.FC<{ canvasRef: React.RefObject<HTMLCanvasElement> }> = ({ canvasRef }) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xfff7d6, 0.1);

    // Create a simple rotating cube geometry
    const geometry = new THREE.IcosahedronGeometry(2, 4);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00c599,
      emissive: 0x004042,
      shininess: 100,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xff8847, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x00c599, 0.5);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.001;
      mesh.rotation.y += 0.002;
      mesh.rotation.z += 0.0005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [canvasRef]);

  return null;
};

export const HomePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light via-white to-secondary-light">
        {/* WebGL Canvas - only render on desktop */}
        {!isMobile && (
          <>
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ display: 'block' }}
            />
            <HeroCanvas canvasRef={canvasRef} />
          </>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl text-primary-dark mb-4">
            Welcome to <span className="text-primary-bright">NordPixel</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-dark opacity-80 mb-8 max-w-2xl mx-auto">
            WebGL & 3D Design, Web Applications, and Frontend Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-primary-dark mb-12 text-center">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Cards Placeholder */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-primary-dark font-heading text-xl">Project {i}</p>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary-dark mb-2">Project Title</h3>
                <p className="font-body text-sm text-primary-dark opacity-60 mb-4">
                  Brief project description highlighting key technologies and achievements.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary-light text-primary-dark text-xs rounded-full font-body">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary-light text-primary-dark text-xs rounded-full font-body">
                    Three.js
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Ready to collaborate?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with cutting-edge web technologies and design.
          </p>
          <Button variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};
