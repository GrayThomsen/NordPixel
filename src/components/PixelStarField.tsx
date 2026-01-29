import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PixelStarFieldProps {
  className?: string;
}

interface Particle {
  mesh: THREE.Mesh;
  velocity: { x: number; y: number };
  lifetime: number;
  maxLifetime: number;
}

export const PixelStarField = ({ className = '' }: PixelStarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Store initial dimensions for resize calculations
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -initialWidth / 2,
      initialWidth / 2,
      initialHeight / 2,
      -initialHeight / 2,
      1,
      1000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create stars
    const stars: THREE.Mesh[] = [];
    const starCount = 30;
    const starGeometry = new THREE.PlaneGeometry(8, 8);
    
    // Regular white/gray stars
    const whiteMaterial = new THREE.MeshBasicMaterial({ color: 0xDFDFDF });
    
    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeometry, whiteMaterial);
      
      // Position only in top 40% of screen
      star.position.x = (Math.random() - 0.5) * window.innerWidth;
      star.position.y = Math.random() * (window.innerHeight * 0.4) + (window.innerHeight * 0.1);
      star.position.z = 0;
      
      // Store initial velocity for drift
      (star as any).velocity = {
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
      };
      (star as any).initialX = star.position.x;
      (star as any).initialY = star.position.y;
      
      scene.add(star);
      stars.push(star);
    }

    // Create the special orange star (bigger)
    const orangeStarGeometry = new THREE.PlaneGeometry(24, 24);
    const orangeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFBB03B,
      transparent: true,
      opacity: 1
    });
    const orangeStar = new THREE.Mesh(orangeStarGeometry, orangeMaterial);
    orangeStar.position.x = (Math.random() - 0.5) * window.innerWidth;
    orangeStar.position.y = Math.random() * (window.innerHeight * 0.4) + (window.innerHeight * 0.1);
    orangeStar.position.z = 0;
    (orangeStar as any).velocity = {
      x: (Math.random() - 0.5) * 0.15,
      y: (Math.random() - 0.5) * 0.15,
    };
    (orangeStar as any).initialX = orangeStar.position.x;
    (orangeStar as any).initialY = orangeStar.position.y;
    scene.add(orangeStar);

    // Particle system for explosion
    const particles: Particle[] = [];
    const particleGeometry = new THREE.PlaneGeometry(4, 4);

    const createExplosion = (x: number, y: number) => {
      const particleCount = 8;
      for (let i = 0; i < particleCount; i++) {
        const particleMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xFBB03B,
          transparent: true,
          opacity: 1
        });
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.position.set(x, y, 0);
        
        // Random outward velocity
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = 2 + Math.random() * 2;
        
        const particleData: Particle = {
          mesh: particle,
          velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed - 3,
          },
          lifetime: 0,
          maxLifetime: 30,
        };
        
        particles.push(particleData);
        scene.add(particle);
      }
    };

    // Orange star teleport logic
    let nextTeleport = Date.now() + 10000;
    let isExploding = false;
    let explosionStartTime = 0;
    let isFadingIn = false;
    
    // Swirl effect state
    let isSwirlActive = false;
    let swirlStartTime = 0;
    let swirlDuration = 7000; // 7 seconds total (swirl + settle)
    
    // Store original positions for settling back
    const storeOriginalPositions = () => {
      [...stars, orangeStar].forEach((star) => {
        (star as any).swirlStartX = star.position.x;
        (star as any).swirlStartY = star.position.y;
        (star as any).swirlTargetAngle = Math.random() * Math.PI * 2;
        (star as any).swirlRadius = 100 + Math.random() * 200;
        (star as any).swirlSpeed = 0.05 + Math.random() * 0.05;
      });
    };

    const teleportOrangeStar = () => {
      if (isExploding) return;
      isExploding = true;
      
      // Explode immediately
      createExplosion(orangeStar.position.x, orangeStar.position.y);
      orangeStar.visible = false;
      explosionStartTime = Date.now();
    };
    
    // Handle click on orange star
    const handleClick = (event: MouseEvent) => {
      if (!orangeStar.visible || isSwirlActive) return;
      
      // Convert canvas click to world coordinates
      const rect = canvasRef.current!.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      // Convert to camera space
      const worldX = (x - window.innerWidth / 2);
      const worldY = -(y - window.innerHeight / 2);
      
      // Check if click is within orange star bounds (using larger hit area for easier clicking)
      const hitRadius = 30; // Larger than the star for easier clicking
      const dx = worldX - orangeStar.position.x;
      const dy = worldY - orangeStar.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < hitRadius) {
        // Orange star was clicked!
        isSwirlActive = true;
        swirlStartTime = Date.now();
        storeOriginalPositions();
      }
    };
    
    canvasRef.current.addEventListener('click', handleClick);

    // Animation loop
    let animationId: number;
    let lastFrameTime = Date.now();
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = Math.min((now - lastFrameTime) / 16.67, 2);
      lastFrameTime = now;

      // Check if orange star should teleport
      if (Date.now() > nextTeleport && !isExploding) {
        teleportOrangeStar();
      }

      // Handle reappearing after 2 second delay
      if (isExploding && Date.now() - explosionStartTime > 2000) {
        // Teleport to new position
        orangeStar.position.x = (Math.random() - 0.5) * window.innerWidth;
        orangeStar.position.y = Math.random() * (window.innerHeight * 0.4) + (window.innerHeight * 0.1);
        (orangeStar as any).initialX = orangeStar.position.x;
        (orangeStar as any).initialY = orangeStar.position.y;
        (orangeStar as any).velocity = {
          x: (Math.random() - 0.5) * 0.15,
          y: (Math.random() - 0.5) * 0.15,
        };
        
        // Reset swirl angle for new position
        (orangeStar as any).swirlTargetAngle = Math.random() * Math.PI * 2;
        
        orangeStar.visible = true;
        orangeMaterial.opacity = 0;
        isExploding = false;
        isFadingIn = true;
        nextTeleport = Date.now() + 10000;
      }

      // Handle fade-in animation for new orange star
      if (isFadingIn) {
        orangeMaterial.opacity += 0.08;
        if (orangeMaterial.opacity >= 1) {
          orangeMaterial.opacity = 1;
          isFadingIn = false;
        }
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.lifetime++;
        
        p.mesh.position.x += p.velocity.x;
        p.mesh.position.y += p.velocity.y;
        p.velocity.y -= 0.3;
        
        const fadeProgress = p.lifetime / p.maxLifetime;
        (p.mesh.material as THREE.MeshBasicMaterial).opacity = 1 - fadeProgress;
        
        if (p.lifetime >= p.maxLifetime) {
          scene.remove(p.mesh);
          (p.mesh.material as THREE.Material).dispose();
          particles.splice(i, 1);
        }
      }

      // Animate all stars with subtle drift
      let swirlProgress = 0;
      let hasSwirlProgress = false;
      if (isSwirlActive) {
        const elapsed = Date.now() - swirlStartTime;
        swirlProgress = Math.min(elapsed / swirlDuration, 1);
        hasSwirlProgress = true;
      }

      [...stars, orangeStar].forEach((star) => {
        const vel = (star as any).velocity;
        const initialX = (star as any).initialX;
        const initialY = (star as any).initialY;
        
        if (isSwirlActive) {
          // Swirl animation
          const progress = hasSwirlProgress ? swirlProgress : 0;
          
          if (progress < 0.4) {
            // Swirling phase - smoothly transition from start position to swirl (40%)
            const swirlPhase = progress / 0.4;
            
            // Initialize angle if not set
            if ((star as any).currentSwirlAngle === undefined) {
              (star as any).currentSwirlAngle = (star as any).swirlTargetAngle;
            }
            
            (star as any).currentSwirlAngle += (star as any).swirlSpeed;
            
            const centerX = 0;
            const centerY = window.innerHeight * 0.2;
            const radius = (star as any).swirlRadius * (0.5 + swirlPhase * 1.5);
            
            const targetX = centerX + Math.cos((star as any).currentSwirlAngle) * radius;
            const targetY = centerY + Math.sin((star as any).currentSwirlAngle) * radius;
            
            // Smooth transition from starting position to swirl
            const transitionProgress = Math.min(swirlPhase * 3, 1); // Faster initial transition
            const easeTransition = transitionProgress * transitionProgress * (3 - 2 * transitionProgress);
            
            star.position.x = (star as any).swirlStartX + (targetX - (star as any).swirlStartX) * easeTransition;
            star.position.y = (star as any).swirlStartY + (targetY - (star as any).swirlStartY) * easeTransition;
          } else {
            // Settling back phase (last 60%) with spring physics
            const settleProgress = (progress - 0.4) / 0.6;

            if ((star as any).returnVelocity === undefined) {
              (star as any).returnVelocity = { x: 0, y: 0 };
            }

            const returnVel = (star as any).returnVelocity as { x: number; y: number };

            // Spring physics toward initial position (slow, bouncy)
            const stiffness = 0.012; // lower = slower return
            const damping = 0.12; // lower = more bounce

            const ax = (initialX - star.position.x) * stiffness - returnVel.x * damping;
            const ay = (initialY - star.position.y) * stiffness - returnVel.y * damping;

            returnVel.x += ax * dt;
            returnVel.y += ay * dt;

            // Slightly reduce spring force near the end to avoid abrupt stop
            const settleEase = 1 - Math.pow(1 - settleProgress, 2);
            star.position.x += returnVel.x * dt * (0.6 + 0.4 * settleEase);
            star.position.y += returnVel.y * dt * (0.6 + 0.4 * settleEase);
          }
        } else {
          // Normal drift
          star.position.x += vel.x;
          star.position.y += vel.y;
          
          const driftRange = 50;
          if (Math.abs(star.position.x - initialX) > driftRange) {
            vel.x *= -1;
          }
          if (Math.abs(star.position.y - initialY) > driftRange) {
            vel.y *= -1;
          }
        }
      });

      if (hasSwirlProgress && swirlProgress >= 1) {
        isSwirlActive = false;
        [...stars, orangeStar].forEach((star) => {
          (star as any).currentSwirlAngle = undefined;
          (star as any).returnVelocity = undefined;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Calculate scale factors
      const scaleX = width / initialWidth;
      const scaleY = height / initialHeight;
      
      // Reposition all stars proportionally
      [...stars, orangeStar].forEach((star) => {
        const initialX = (star as any).initialX;
        const initialY = (star as any).initialY;
        
        // Scale the initial positions
        const newInitialX = initialX * scaleX;
        const newInitialY = initialY * scaleY;
        
        // Update both current and initial positions
        star.position.x = newInitialX + (star.position.x - initialX);
        star.position.y = newInitialY + (star.position.y - initialY);
        
        (star as any).initialX = newInitialX;
        (star as any).initialY = newInitialY;
      });
      
      // Update stored dimensions
      initialWidth = width;
      initialHeight = height;
      
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      particles.forEach(p => {
        scene.remove(p.mesh);
        (p.mesh.material as THREE.Material).dispose();
      });
      
      starGeometry.dispose();
      orangeStarGeometry.dispose();
      particleGeometry.dispose();
      whiteMaterial.dispose();
      orangeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
};
