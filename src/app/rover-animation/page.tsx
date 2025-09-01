'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function RoverAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roverRef = useRef<THREE.Group | null>(null);
  const riverRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#B22222'); // Mars red background

    // Lighting - Sun from top-left for realistic shadows
    const ambientLight = new THREE.AmbientLight('#8B2635', 0.2); // Mars red ambient
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight('#f97316', 0.9); // Mars orange sun
    directionalLight.position.set(-15, 15, 10); // Top-left sun position
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // Camera - side angle view for profile view
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.7);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create wavy river grid
    const riverGroup = new THREE.Group();
    riverRef.current = riverGroup;

    // River as rectangular wavy grid - waves along X coordinate
    const riverWidth = 200;
    const riverLength = 4;
    const gridLines = 8;

    // Horizontal river lines with rectangular wave pattern
    for (let i = 0; i < gridLines; i++) {
      const points: THREE.Vector3[] = [];
      const z = (i / (gridLines - 1) - 0.5) * riverLength;
      
      // Create rectangular wave pattern along X axis
      for (let x = -riverWidth/2; x <= riverWidth/2; x += 0.3) {
        const waveHeight = Math.floor(Math.sin(x * 0.4) * 2) * 0.3; // Rectangular waves along X
        points.push(new THREE.Vector3(x, waveHeight, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color: 0x00CED1, // Mars design system cyan accent
        linewidth: 2,
        transparent: true,
        opacity: 0.8
      });
      const line = new THREE.Line(geometry, material);
      riverGroup.add(line);
    }

    // Add vertical grid lines for river structure
    for (let x = -riverWidth/2; x <= riverWidth/2; x += 2) {
      const points: THREE.Vector3[] = [];
      for (let z = -riverLength/2; z <= riverLength/2; z += 0.2) {
        const waveHeight = Math.floor(Math.sin(x * 0.4) * 2) * 0.3; // Waves along X coordinate
        points.push(new THREE.Vector3(x, waveHeight, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color: 0x00CED1, 
        linewidth: 1,
        transparent: true,
        opacity: 0.4
      });
      const line = new THREE.Line(geometry, material);
      riverGroup.add(line);
    }

    scene.add(riverGroup);

    // Add shadow plane for rover shadows
    const shadowPlaneGeometry = new THREE.PlaneGeometry(40, 40);
    const shadowPlaneMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      transparent: true,
      opacity: 0.3
    });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeometry, shadowPlaneMaterial);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.5;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Function to get river wave height at specific X position
    const getRiverWaveHeight = (x: number, t: number) => {
      return Math.floor(Math.sin(x * 0.4 + t) * 2) * 0.3;
    };

    // Add Mars rocks scattered around the landscape
    const rocks: THREE.LineSegments[] = [];
    for (let i = 0; i < 12; i++) {
      const rockSize = 0.2 + Math.random() * 0.4;
      const rockGeometry = new THREE.IcosahedronGeometry(rockSize, 0);
      const rockEdges = new THREE.EdgesGeometry(rockGeometry);
      const rockOutline = new THREE.LineSegments(
        rockEdges,
        new THREE.LineBasicMaterial({ 
          color: 0xffffff, 
          linewidth: 1,
          transparent: true,
          opacity: 0.6 
        })
      );
      
      // Random positioning across the landscape
      const x = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 8;
      const y = getRiverWaveHeight(x, 0) + rockSize;
      
      rockOutline.position.set(x, y, z);
      rockOutline.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      rockOutline.castShadow = true;
      
      scene.add(rockOutline);
      rocks.push(rockOutline);
    }

    // Create EXACT replica of mars-rover-3d with sharp white outlines
    const roverGroup = new THREE.Group();
    const wheels: THREE.LineSegments[] = []; // Store wheel references for rotation
    roverRef.current = roverGroup;

    const scale = 0.5; // Same scale as mars-rover-3d

    // Rover body - main chassis (EXACT replica)
    const bodyGeometry = new THREE.BoxGeometry(2 * scale, 0.5 * scale, 1.5 * scale);
    const bodyEdges = new THREE.EdgesGeometry(bodyGeometry);
    const bodyOutline = new THREE.LineSegments(
      bodyEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 }) // Sharp white
    );
    bodyOutline.castShadow = true;
    roverGroup.add(bodyOutline);

    // Rover wheels (6 wheels EXACTLY like mars-rover-3d)
    const wheelPositions = [
      [-0.8 * scale, -0.4 * scale, 0.8 * scale],   // Front left
      [0.8 * scale, -0.4 * scale, 0.8 * scale],    // Front right
      [-0.8 * scale, -0.4 * scale, 0],             // Middle left
      [0.8 * scale, -0.4 * scale, 0],              // Middle right
      [-0.8 * scale, -0.4 * scale, -0.8 * scale],  // Back left
      [0.8 * scale, -0.4 * scale, -0.8 * scale],   // Back right
    ];

    wheelPositions.forEach(pos => {
      const wheelGeometry = new THREE.CylinderGeometry(0.3 * scale, 0.3 * scale, 0.2 * scale, 8);
      const wheelEdges = new THREE.EdgesGeometry(wheelGeometry);
      const wheelOutline = new THREE.LineSegments(
        wheelEdges,
        new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }) // Sharp white
      );
      wheelOutline.rotation.z = Math.PI / 2;
      wheelOutline.position.set(pos[0], pos[1], pos[2]);
      wheelOutline.castShadow = true;
      roverGroup.add(wheelOutline);
      wheels.push(wheelOutline); // Store for rotation animation
    });

    // Solar panels (EXACT replica)
    const panelGeometry = new THREE.BoxGeometry(1.8 * scale, 0.05 * scale, 1.2 * scale);
    const panelEdges = new THREE.EdgesGeometry(panelGeometry);
    const panelOutline = new THREE.LineSegments(
      panelEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }) // Sharp white
    );
    panelOutline.position.set(0, 0.5 * scale, 0);
    panelOutline.castShadow = true;
    roverGroup.add(panelOutline);

    // Camera mast (EXACT replica)
    const mastGeometry = new THREE.CylinderGeometry(0.05 * scale, 0.05 * scale, 1.5 * scale);
    const mastEdges = new THREE.EdgesGeometry(mastGeometry);
    const mastOutline = new THREE.LineSegments(
      mastEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }) // Sharp white
    );
    mastOutline.position.set(0.5 * scale, 1 * scale, 0.5 * scale);
    mastOutline.castShadow = true;
    roverGroup.add(mastOutline);

    // Camera head (EXACT replica)
    const cameraGeometry = new THREE.BoxGeometry(0.3 * scale, 0.2 * scale, 0.3 * scale);
    const cameraEdges = new THREE.EdgesGeometry(cameraGeometry);
    const cameraOutline = new THREE.LineSegments(
      cameraEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }) // Sharp white
    );
    cameraOutline.position.set(0.5 * scale, 1.6 * scale, 0.5 * scale);
    cameraOutline.castShadow = true;
    roverGroup.add(cameraOutline);

    // Robotic arm (EXACT replica)
    const armGeometry = new THREE.BoxGeometry(1.2 * scale, 0.1 * scale, 0.1 * scale);
    const armEdges = new THREE.EdgesGeometry(armGeometry);
    const armOutline = new THREE.LineSegments(
      armEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }) // Sharp white
    );
    armOutline.position.set(-1 * scale, 0.3 * scale, 0.6 * scale);
    armOutline.rotation.z = Math.PI / 6;
    armOutline.castShadow = true;
    roverGroup.add(armOutline);

    // Position rover to start from left
    roverGroup.position.set(-12, 0.5, 0);
    scene.add(roverGroup);

    // Animation variables
    let time = 0;
    const speed = 0.006; // Much slower movement

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += speed;
      
      if (roverRef.current) {
        // Move rover from left to right slowly
        const progress = (time % 8); // Reset every 8 seconds (slower)
        const xPosition = -12 + (progress * 3); // Move slower across screen
        
        // Follow the rectangular wave pattern of the river based on current X position
        const riverHeight = getRiverWaveHeight(xPosition, time * 3);
        
        roverRef.current.position.set(xPosition, 0.8 + riverHeight, 0);
        
        // Rotate wheels realistically as rover moves along ground
        wheels.forEach(wheel => {
          // Rotate around X-axis (like real wheels rolling on ground)
          wheel.rotation.x += speed * 12; // Realistic wheel rotation speed
        });
        
        // Reset position when rover goes off screen
        if (xPosition > 12) {
          roverRef.current.position.x = -12;
        }
      }
      
      // Animate river waves - rectangular pattern moving along X
      if (riverRef.current) {
        riverRef.current.children.forEach((line, index) => {
          if (line instanceof THREE.Line) {
            const positions = line.geometry.attributes.position;
            const array = positions.array as Float32Array;
            
            for (let i = 0; i < array.length; i += 3) {
              const x = array[i]; // X coordinate
              array[i + 1] = getRiverWaveHeight(x, time * 3); // Rectangular wave pattern along X
            }
            positions.needsUpdate = true;
          }
        });
      }
      
      // Subtle rock animation - gentle rotation and opacity pulse
      rocks.forEach((rock, index) => {
        rock.rotation.y += 0.001 * (index % 2 === 0 ? 1 : -1); // Slow rotation
        rock.material.opacity = 0.4 + 0.2 * Math.sin(time * 2 + index); // Gentle pulsing
      });
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth * 0.9;
      const height = window.innerHeight * 0.7;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-orange-900 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-600 mb-4">
            🌊 Green Rover River Journey
          </h1>
          <p className="text-xl text-red-300 max-w-3xl mx-auto">
            Detailed white outline rover exploring a Martian landscape with scattered rocks, casting realistic shadows from top-left sun
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
            <h3 className="text-xl font-semibold text-red-200 mb-4">🎨 Scene Features</h3>
            <ul className="space-y-2 text-red-100">
              <li>• Sharp white outline rover design</li>
              <li>• 6-wheel suspension system (like real Mars rovers)</li>
              <li>• Scattered Mars rocks with subtle animation</li>
              <li>• Camera mast with panoramic head</li>
              <li>• Extendable robotic arm</li>
              <li>• Realistic shadows from top-left sun</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-semibold text-red-200 mb-4">⚡ Animation Details</h3>
            <ul className="space-y-2 text-red-100">
              <li>• Smooth 60fps rendering</li>
              <li>• All 6 wheels rotate synchronously</li>
              <li>• Rocks slowly rotate with opacity pulsing</li>
              <li>• Complex geometry with edge outlines</li>
              <li>• Real-time rectangular wave physics</li>
              <li>• Dynamic shadow casting system</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 p-6 bg-red-950/50 rounded-lg border border-red-500/30">
          <p className="text-lg text-red-200">
            🎯 <strong>Mars Exploration Scene:</strong> A scientifically accurate rover with sharp white outlines exploring a realistic Martian landscape.
            Watch as it navigates between animated rocks with all elements casting natural shadows from the Martian sun!
          </p>
        </div>
      </div>
    </div>
  );
}
