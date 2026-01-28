import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const ConstructionPopup: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0x0f1117, 0);

    // Create animated orb
    const geometry = new THREE.IcosahedronGeometry(1, 5);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00c599,
      emissive: 0x004042,
      shininess: 100,
      wireframe: false,
    });

    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xff8847, 1.2);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x00c599, 0.8);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotate orb
      orb.rotation.x += 0.003;
      orb.rotation.y += 0.005;
      orb.rotation.z += 0.002;

      // Pulsing scale animation
      const scale = 1 + Math.sin(Date.now() * 0.003) * 0.15;
      orb.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-slate-900/95 border border-primary-bright/30 rounded-2xl p-12 max-w-md w-full mx-4 shadow-2xl shadow-primary-bright/20 animate-fade-in">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-heading text-primary-bright mb-2">
            Under Construction
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Something amazing is coming soon. Stay tuned!
          </p>

          {/* Animated Orb */}
          <div className="flex justify-center mb-8">
            <canvas
              ref={canvasRef}
              className="w-48 h-48 rounded-full"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 197, 153, 0.3))',
              }}
            />
          </div>

          <button
            onClick={() => {
              // Close popup or navigate
              window.history.back();
            }}
            className="px-8 py-3 bg-primary-bright text-slate-900 rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-bright"
          >
            Go Back
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};
