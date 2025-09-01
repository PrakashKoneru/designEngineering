'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MarsLandscape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#B22222'); // Mars red background

    // Crane shot camera - elevated, looking down at angle
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(20, 20, 30);
    camera.lookAt(20, 0, 0);

    // Renderer - full screen
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight('#cc4125', 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#ff7f50', 0.8);
    sunLight.position.set(-20, 30, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Mars landscape block
    // const landscapeGeometry = new THREE.BoxGeometry(40, 15, 40);
    // const landscapeMaterial = new THREE.MeshLambertMaterial({ color: '#A0522D' });
    // const landscape = new THREE.Mesh(landscapeGeometry, landscapeMaterial);
    // landscape.position.y = -5;
    // landscape.castShadow = true;
    // landscape.receiveShadow = true;
    // scene.add(landscape);

    // Ground rectangle
    const groundGeometry = new THREE.PlaneGeometry(50, 90);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: '#A0522D' });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -10;
    ground.receiveShadow = true;
    scene.add(ground);

    // BoxGeometry exploration
    const boxGeometry = new THREE.BoxGeometry(5, 3, 800);
    const boxMaterial = new THREE.MeshLambertMaterial({ color: '#8B4513' });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 10, 100); // Position above ground
    box.castShadow = true;
    box.receiveShadow = true;
    scene.add(box);

    const box2Geometry = new THREE.BoxGeometry(5, 3, 800);
    const box2Material = new THREE.MeshLambertMaterial({ color: '#8B4513' });
    const box2 = new THREE.Mesh(box2Geometry, box2Material);
    box2.position.set(10, 10, 100); // Position above ground
    box2.castShadow = true;
    box2.receiveShadow = true;
    scene.add(box2);

    // Mars dust particles
    const dustParticles = new THREE.Group();
    const dustGeometry = new THREE.SphereGeometry(0.02, 4, 4);
    const dustMaterial = new THREE.MeshLambertMaterial({ 
      color: '#CD853F',
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < 200; i++) {
      const dust = new THREE.Mesh(dustGeometry, dustMaterial);
      dust.position.set(
        (Math.random() - 0.5) * 100,
        Math.random() * 50,
        (Math.random() - 0.5) * 100
      );
      dust.castShadow = true;
      dustParticles.add(dust);
    }
    scene.add(dustParticles);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Slowly drift dust particles
      dustParticles.children.forEach((dust, index) => {
        dust.position.x += Math.sin(Date.now() * 0.001 + index) * 0.01;
        dust.position.y += Math.cos(Date.now() * 0.0008 + index) * 0.005;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0">
      <canvas ref={canvasRef} />
      <div style={{ zIndex: 1000 }}>Coming up Soon</div>
    </div>
  );
}
