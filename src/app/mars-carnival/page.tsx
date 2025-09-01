'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MarsCarnaval() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Create atmospheric Mars sky gradient
    const gradientTexture = new THREE.CanvasTexture(createGradientCanvas());
    scene.background = gradientTexture;
    
    sceneRef.current = scene;

    // Camera - cinematic wide view
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 50, 150);
    camera.lookAt(0, 20, 0);

    // Renderer with enhanced settings
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Atmospheric Mars lighting - red sunset
    const ambientLight = new THREE.AmbientLight('#cc4125', 0.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight('#ff7f50', 1.0);
    sunLight.position.set(-100, 80, 50);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 500;
    sunLight.shadow.camera.left = -200;
    sunLight.shadow.camera.right = 200;
    sunLight.shadow.camera.top = 200;
    sunLight.shadow.camera.bottom = -200;
    scene.add(sunLight);

    // Mars ground
    const groundGeometry = new THREE.PlaneGeometry(400, 400, 50, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: '#cd853f',
      transparent: true,
      opacity: 0.9
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    
    // Add some terrain variation
    const vertices = groundGeometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] += Math.random() * 3 - 1.5; // Random height variation
    }
    groundGeometry.attributes.position.needsUpdate = true;
    groundGeometry.computeVertexNormals();
    
    scene.add(ground);

    // Central massive carousel structure
    const centralStructure = new THREE.Group();
    
    // Main tower/base
    const towerGeometry = new THREE.CylinderGeometry(8, 12, 40, 16);
    const towerMaterial = new THREE.MeshStandardMaterial({ 
      color: '#A0522D', // Reddish-brown like in image
      roughness: 0.7,
      metalness: 0.3
    });
    const tower = new THREE.Mesh(towerGeometry, towerMaterial);
    tower.position.y = 20;
    tower.castShadow = true;
    centralStructure.add(tower);

    // Large carousel top
    const carouselGeometry = new THREE.CylinderGeometry(25, 20, 8, 32);
    const carouselMaterial = new THREE.MeshStandardMaterial({ 
      color: '#CD5C5C', // Indian red like the main structure
      roughness: 0.6,
      metalness: 0.4
    });
    const carousel = new THREE.Mesh(carouselGeometry, carouselMaterial);
    carousel.position.y = 45;
    carousel.castShadow = true;
    centralStructure.add(carousel);

    // Ornate details on carousel
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      
      // Hanging gondolas
      const gondolaGeometry = new THREE.BoxGeometry(2, 1, 2);
      const gondolaMaterial = new THREE.MeshPhongMaterial({ 
        color: '#B22222', // Deep red like the image
        shininess: 40
      });
      const gondola = new THREE.Mesh(gondolaGeometry, gondolaMaterial);
      gondola.position.set(
        Math.cos(angle) * 22,
        38,
        Math.sin(angle) * 22
      );
      gondola.castShadow = true;
      centralStructure.add(gondola);

      // Decorative pillars
      const pillarGeometry = new THREE.CylinderGeometry(0.5, 0.8, 15, 8);
      const pillarMaterial = new THREE.MeshStandardMaterial({ 
        color: '#CD853F', // Brass/bronze like in image
        roughness: 0.5,
        metalness: 0.5
      });
      const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
      pillar.position.set(
        Math.cos(angle) * 15,
        7.5,
        Math.sin(angle) * 15
      );
      pillar.castShadow = true;
      centralStructure.add(pillar);
    }

    // Spire on top
    const spireGeometry = new THREE.ConeGeometry(3, 15, 8);
    const spireMaterial = new THREE.MeshStandardMaterial({ 
      color: '#B8860B', // Darker gold with reddish tint
      roughness: 0.4,
      metalness: 0.6
    });
    const spire = new THREE.Mesh(spireGeometry, spireMaterial);
    spire.position.y = 57;
    spire.castShadow = true;
    centralStructure.add(spire);

    scene.add(centralStructure);

    // Carnival tents around the base - Mars sunset colors
    const tentPositions = [
      { x: -40, z: 30, color: '#CD5C5C' }, // Indian red
      { x: 40, z: 35, color: '#A0522D' }, // Sienna
      { x: -35, z: -40, color: '#B22222' }, // Fire brick
      { x: 50, z: -30, color: '#D2691E' }, // Chocolate orange
      { x: -60, z: 0, color: '#DAA520' }, // Goldenrod
      { x: 60, z: 20, color: '#CD853F' }, // Peru
    ];

    tentPositions.forEach(pos => {
      const tentGroup = new THREE.Group();
      
      // Tent body
      const tentGeometry = new THREE.ConeGeometry(8, 12, 8);
      const tentMaterial = new THREE.MeshLambertMaterial({ color: pos.color });
      const tent = new THREE.Mesh(tentGeometry, tentMaterial);
      tent.position.y = 6;
      tent.castShadow = true;
      tentGroup.add(tent);
      
      // Tent flag
      const flagGeometry = new THREE.ConeGeometry(0.5, 3, 4);
      const flagMaterial = new THREE.MeshLambertMaterial({ color: '#FFD700' });
      const flag = new THREE.Mesh(flagGeometry, flagMaterial);
      flag.position.y = 13;
      tentGroup.add(flag);
      
      tentGroup.position.set(pos.x, 0, pos.z);
      scene.add(tentGroup);
    });

    // Palm trees scattered around
    for (let i = 0; i < 20; i++) {
      const palmGroup = new THREE.Group();
      
      // Trunk
      const trunkGeometry = new THREE.CylinderGeometry(0.8, 1.2, 15, 8);
      const trunkMaterial = new THREE.MeshLambertMaterial({ color: '#8B4513' });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = 7.5;
      trunk.castShadow = true;
      palmGroup.add(trunk);
      
      // Palm fronds
      for (let j = 0; j < 6; j++) {
        const frondGeometry = new THREE.ConeGeometry(0.5, 8, 4);
        const frondMaterial = new THREE.MeshLambertMaterial({ color: '#228B22' });
        const frond = new THREE.Mesh(frondGeometry, frondMaterial);
        const angle = (j / 6) * Math.PI * 2;
        frond.position.set(
          Math.cos(angle) * 2,
          18,
          Math.sin(angle) * 2
        );
        frond.rotation.z = Math.cos(angle) * 0.5;
        frond.rotation.x = Math.sin(angle) * 0.5;
        palmGroup.add(frond);
      }
      
      // Random positioning
      const x = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      if (Math.abs(x) > 25 || Math.abs(z) > 25) { // Don't place too close to center
        palmGroup.position.set(x, 0, z);
        scene.add(palmGroup);
      }
    }

    // Celestial bodies in the sky
    const planets: THREE.Mesh[] = [];
    
    // Large Mars-like planet
    const planet1Geometry = new THREE.SphereGeometry(20, 32, 32);
    const planet1Material = new THREE.MeshPhongMaterial({ 
      color: '#CD5C5C', // More reddish Mars color
      shininess: 10
    });
    const planet1 = new THREE.Mesh(planet1Geometry, planet1Material);
    planet1.position.set(-80, 60, -150);
    scene.add(planet1);
    planets.push(planet1);

    // Smaller reddish planet
    const planet2Geometry = new THREE.SphereGeometry(8, 32, 32);
    const planet2Material = new THREE.MeshPhongMaterial({ 
      color: '#A0522D', // Sienna instead of blue
      shininess: 20
    });
    const planet2 = new THREE.Mesh(planet2Geometry, planet2Material);
    planet2.position.set(100, 80, -200);
    scene.add(planet2);
    planets.push(planet2);

    // Moons
    for (let i = 0; i < 3; i++) {
      const moonGeometry = new THREE.SphereGeometry(2 + Math.random() * 3, 16, 16);
      const moonMaterial = new THREE.MeshPhongMaterial({ 
        color: '#C0C0C0',
        shininess: 5
      });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(
        (Math.random() - 0.5) * 300,
        40 + Math.random() * 40,
        -100 - Math.random() * 100
      );
      scene.add(moon);
      planets.push(moon);
    }

    // Distant mountain ranges - reddish Mars mountains
    for (let i = 0; i < 8; i++) {
      const mountainGeometry = new THREE.ConeGeometry(
        10 + Math.random() * 20,
        20 + Math.random() * 30,
        8
      );
      const mountainMaterial = new THREE.MeshLambertMaterial({ 
        color: '#A0522D', // Sienna for Mars mountains
        transparent: true,
        opacity: 0.6
      });
      const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
      const angle = (i / 8) * Math.PI * 2;
      mountain.position.set(
        Math.cos(angle) * (150 + Math.random() * 50),
        15,
        Math.sin(angle) * (150 + Math.random() * 50)
      );
      scene.add(mountain);
    }

    // Tiny people figures
    for (let i = 0; i < 30; i++) {
      const personGeometry = new THREE.CapsuleGeometry(0.3, 1.5, 4, 8);
      const personMaterial = new THREE.MeshLambertMaterial({ 
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5)
      });
      const person = new THREE.Mesh(personGeometry, personMaterial);
      person.position.set(
        (Math.random() - 0.5) * 80,
        1,
        (Math.random() - 0.5) * 80
      );
      person.castShadow = true;
      scene.add(person);
    }

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Rotate central structure slowly
      centralStructure.rotation.y += 0.002;
      
      // Animate planets
      planets.forEach((planet, index) => {
        planet.rotation.y += 0.005 + index * 0.001;
      });
      
      // Gentle camera sway
      camera.position.x = Math.sin(time * 0.1) * 5;
      camera.position.y = 50 + Math.sin(time * 0.15) * 3;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Helper function to create gradient canvas for red Mars sky
  function createGradientCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    
    const context = canvas.getContext('2d')!;
    const gradient = context.createLinearGradient(0, 0, 0, 512);
    gradient.addColorStop(0, '#8B1538'); // Deep burgundy red top
    gradient.addColorStop(0.2, '#B22222'); // Fire brick red
    gradient.addColorStop(0.5, '#DC143C'); // Crimson middle
    gradient.addColorStop(0.7, '#FF6347'); // Tomato orange-red
    gradient.addColorStop(0.9, '#FF7F50'); // Coral sunset
    gradient.addColorStop(1, '#CD853F'); // Mars ground color
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);
    
    return canvas;
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-br from-orange-800 to-red-900 relative overflow-hidden">
      <header className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 mb-2">
          🎡 Mars Carnival
        </h1>
        <p className="text-lg text-orange-200">
          A futuristic amusement park on Mars
        </p>
      </header>

      <div className="h-full w-full flex items-center justify-center">
        <canvas 
          ref={canvasRef}
          className="block w-full h-full"
        />
      </div>
    </div>
  );
}
