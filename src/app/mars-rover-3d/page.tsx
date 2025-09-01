'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MarsRover3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const roverGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0F0F0F'); // Mars design system black
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(5, 3, 5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight('#8B2635', 0.3); // Mars red ambient
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight('#f97316', 0.8); // Mars orange
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Mars ground
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: '#B22222',
      transparent: true,
      opacity: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create rover group
    const roverGroup = new THREE.Group();
    roverGroupRef.current = roverGroup;

    // Rover body - main chassis
    const bodyGeometry = new THREE.BoxGeometry(2, 0.5, 1.5);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: '#36454F', // Mars design system gray
      metalness: 0.7,
      roughness: 0.3
    });
    const roverBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    roverBody.castShadow = true;
    roverGroup.add(roverBody);

    // White outline for body
    const bodyEdges = new THREE.EdgesGeometry(bodyGeometry);
    const bodyOutline = new THREE.LineSegments(
      bodyEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    );
    roverGroup.add(bodyOutline);

    // Rover wheels (6 wheels like real Mars rovers)
    const wheelPositions = [
      [-0.8, -0.4, 0.8],   // Front left
      [0.8, -0.4, 0.8],    // Front right
      [-0.8, -0.4, 0],     // Middle left
      [0.8, -0.4, 0],      // Middle right
      [-0.8, -0.4, -0.8],  // Back left
      [0.8, -0.4, -0.8],   // Back right
    ];

    wheelPositions.forEach((pos) => {
      const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 8);
      const wheelMaterial = new THREE.MeshStandardMaterial({ 
        color: '#2F4F4F', // Mars design system blue
        metalness: 0.8,
        roughness: 0.2
      });
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(pos[0], pos[1], pos[2]);
      wheel.castShadow = true;
      roverGroup.add(wheel);

      // White outline for wheels
      const wheelEdges = new THREE.EdgesGeometry(wheelGeometry);
      const wheelOutline = new THREE.LineSegments(
        wheelEdges,
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1.5 })
      );
      wheelOutline.rotation.z = Math.PI / 2;
      wheelOutline.position.set(pos[0], pos[1], pos[2]);
      roverGroup.add(wheelOutline);
    });

    // Solar panels
    const panelGeometry = new THREE.BoxGeometry(1.8, 0.05, 1.2);
    const panelMaterial = new THREE.MeshStandardMaterial({ 
      color: '#191970', // Mars design system dark blue
      metalness: 0.9,
      roughness: 0.1
    });
    const solarPanel = new THREE.Mesh(panelGeometry, panelMaterial);
    solarPanel.position.set(0, 0.5, 0);
    solarPanel.castShadow = true;
    roverGroup.add(solarPanel);

    // Solar panel outline
    const panelEdges = new THREE.EdgesGeometry(panelGeometry);
    const panelOutline = new THREE.LineSegments(
      panelEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    );
    panelOutline.position.set(0, 0.5, 0);
    roverGroup.add(panelOutline);

    // Camera mast
    const mastGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5);
    const mastMaterial = new THREE.MeshStandardMaterial({ 
      color: '#36454F',
      metalness: 0.7,
      roughness: 0.3
    });
    const cameraMast = new THREE.Mesh(mastGeometry, mastMaterial);
    cameraMast.position.set(0.5, 1, 0.5);
    cameraMast.castShadow = true;
    roverGroup.add(cameraMast);

    // Camera mast outline
    const mastEdges = new THREE.EdgesGeometry(mastGeometry);
    const mastOutline = new THREE.LineSegments(
      mastEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1.5 })
    );
    mastOutline.position.set(0.5, 1, 0.5);
    roverGroup.add(mastOutline);

    // Camera head
    const cameraGeometry = new THREE.BoxGeometry(0.3, 0.2, 0.3);
    const cameraMaterial = new THREE.MeshStandardMaterial({ 
      color: '#2F4F4F',
      metalness: 0.8,
      roughness: 0.2
    });
    const cameraHead = new THREE.Mesh(cameraGeometry, cameraMaterial);
    cameraHead.position.set(0.5, 1.6, 0.5);
    cameraHead.castShadow = true;
    roverGroup.add(cameraHead);

    // Camera outline
    const cameraEdges = new THREE.EdgesGeometry(cameraGeometry);
    const cameraOutline = new THREE.LineSegments(
      cameraEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    );
    cameraOutline.position.set(0.5, 1.6, 0.5);
    roverGroup.add(cameraOutline);

    // Robotic arm
    const armGeometry = new THREE.BoxGeometry(1.2, 0.1, 0.1);
    const armMaterial = new THREE.MeshStandardMaterial({ 
      color: '#f97316', // Mars orange accent
      metalness: 0.6,
      roughness: 0.4
    });
    const roboticArm = new THREE.Mesh(armGeometry, armMaterial);
    roboticArm.position.set(-1, 0.3, 0.6);
    roboticArm.rotation.z = Math.PI / 6;
    roboticArm.castShadow = true;
    roverGroup.add(roboticArm);

    // Arm outline
    const armEdges = new THREE.EdgesGeometry(armGeometry);
    const armOutline = new THREE.LineSegments(
      armEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1.5 })
    );
    armOutline.position.set(-1, 0.3, 0.6);
    armOutline.rotation.z = Math.PI / 6;
    roverGroup.add(armOutline);

    scene.add(roverGroup);

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (roverGroupRef.current) {
        roverGroupRef.current.rotation.y += 0.005; // Slow rotation
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;
      
      const width = window.innerWidth * 0.8;
      const height = window.innerHeight * 0.6;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-orange-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-600 mb-4">
            🚀 Mars Rover 3D
          </h1>
          <p className="text-xl text-red-300 max-w-3xl mx-auto">
            Interactive 3D Mars rover with white outlines using Three.js
          </p>
        </header>

        <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)] mb-8">
          <div className="flex justify-center">
            <canvas 
              ref={canvasRef}
              className="rounded-lg border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-red-200 mb-4">🔧 Rover Features</h3>
            <ul className="space-y-2 text-red-100">
              <li>• Six-wheel suspension system</li>
              <li>• Deployable solar panels</li>
              <li>• Camera mast with panoramic view</li>
              <li>• Robotic arm for sample collection</li>
              <li>• White outline rendering</li>
              <li>• Mars-themed materials</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-red-200 mb-4">⚡ Three.js Features</h3>
            <ul className="space-y-2 text-red-100">
              <li>• Real-time 3D rendering</li>
              <li>• Dynamic lighting system</li>
              <li>• Shadow casting & receiving</li>
              <li>• Edge geometry outlines</li>
              <li>• Responsive canvas sizing</li>
              <li>• Smooth 60fps animation</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 p-6 bg-red-950/50 rounded-lg border border-red-500/30">
          <p className="text-lg text-red-200">
            🎯 <strong>Interactive Mars Rover:</strong> Built with Three.js, featuring white outline effects and Mars design system colors.
            The rover slowly rotates to show all angles of the detailed 3D model.
          </p>
        </div>
      </div>
    </div>
  );
}
