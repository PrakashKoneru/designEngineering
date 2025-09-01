'use client';

import { useState } from 'react';

export default function DesignSystemIndex() {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  
  const designSystems = [
    {
      id: 1,
      name: "Healthcare Trust",
      description: "Refined minimalist design applied to healthcare - trustworthy, accessible, and clean",
      route: "/healthcare",
      features: ["Trustworthy", "Accessible", "Refined"],
      status: "Complete"
    },
    {
      id: 2,
      name: "Finance Professional",
      description: "Professional, secure, and data-focused design for financial applications",
      route: "/finance",
      features: ["Professional", "Secure", "Data-focused"],
      status: "In Development"
    },
    {
      id: 3,
      name: "Neumorphism Soft",
      description: "Soft shadows, subtle depth, and tactile design elements",
      route: "/neumorphism",
      features: ["Soft", "Tactile", "3D"],
      status: "In Development"
    },
    {
      id: 4,
      name: "Glassmorphism Crystal",
      description: "Transparency, blur effects, and modern glass-like interfaces",
      route: "/glassmorphism",
      features: ["Transparent", "Modern", "Glass-like"],
      status: "In Development"
    },
    {
      id: 5,
      name: "Futuristic Mars",
      description: "Sci-fi inspired, glowing elements, and advanced technology aesthetics inspired by Mars exploration",
      route: "/futuristic",
      features: ["Sci-fi", "Glowing", "Advanced"],
      status: "Complete"
    },
    {
      id: 6,
      name: "Mars Carnival",
      description: "Interactive 3D Mars carnival experience with rotating carousels and floating planets",
      route: "/mars-carnival",
      features: ["3D", "Interactive", "Whimsical"],
      status: "Complete"
    },
    {
      id: 7,
      name: "Mars Landscape",
      description: "Cinematic 3D Mars landscape background with atmospheric dust particles",
      route: "/mars-landscape",
      features: ["3D", "Atmospheric", "Background"],
      status: "Complete"
    },
    {
      id: 8,
      name: "Rover Animation",
      description: "Animated Mars rover moving along wavy terrain with realistic wheel rotation",
      route: "/rover-animation",
      features: ["Animation", "Physics", "Realistic"],
      status: "Complete"
    },
    {
      id: 9,
      name: "Three.js Demo",
      description: "Educational breakdown of Three.js concepts and interactive examples",
      route: "/threejs-demo",
      features: ["Educational", "Interactive", "Explanatory"],
      status: "Complete"
    }
  ];

  return (
    <div className="h-screen w-screen bg-yellow-50 overflow-hidden">
      {/* Overlay to close focused card when clicking outside */}
      {focusedCard !== null && (
        <div
          className="fixed inset-0 z-50 cursor-pointer"
          onClick={() => setFocusedCard(null)}
        />
      )}
      
      {/* Design Systems Straight Deck */}
      <div className="relative group/container" style={{ width: '100vw', height: '100vh' }}>
          {designSystems.map((system, index) => {
            const totalCards = designSystems.length;
            
            // Semicircle positioning with no center gap - rotated 90° left
            const radius = 150; // Smaller radius for tighter deck
            const angleSpread = 120; // Reduced spread for better readability
            const startAngle = -angleSpread / 2 - 90; // Start angle rotated 90° left
            const angleStep = angleSpread / (totalCards - 1); // Angle between cards
            const currentAngle = startAngle + (index * angleStep);
            const radians = (currentAngle * Math.PI) / 180;
            
            // Calculate distances first
            const middleIndex = (totalCards - 1) / 2;
            const distanceFromMiddle = Math.abs(index - middleIndex);
            const maxDistance = Math.max(...designSystems.map((_, i) => Math.abs(i - middleIndex)));
            
            // Position cards in semicircle
            const x = radius * Math.cos(radians);
            const baseY = radius * Math.sin(radians);
            
            // Pull center cards down to create natural arc (like holding cards)
            const centerOffset = (maxDistance - distanceFromMiddle) * 40; // Center cards go much lower
            let y = baseY + centerOffset; // Positive because we want center cards down
            
            // Special adjustment: move ONLY center cards (highest z-index) down a bit
            const isCenterCard = distanceFromMiddle <= 0.5; // Cards 3 & 4 are center (highest z-index)
            if (isCenterCard) {
              y = y - 50; // Move center cards up less (30px down from previous position)
            }
            
            // Rotate cards to face outward for readability
            const cardRotation = currentAngle + 90; // Face outward from center
            
            // Z-index highest at center (inverted V-shape)
            const cardZIndex = Math.round((maxDistance - distanceFromMiddle) * 10);
            
            // Make all cards different heights based on position
            const baseHeight = 350; // Base height in pixels
            const heightVariation = (maxDistance - distanceFromMiddle) * 30; // Height increases toward center
            const cardHeightPx = Math.round(baseHeight + heightVariation);
            
            return (
              <div key={system.id}>
                {/* Visual card that moves to center and is directly clickable */}
                <div
                  className="group absolute transition-all duration-500 ease-out cursor-pointer pointer-events-auto"
                  onClick={(e) => {
                    // Only allow focus if no card is currently focused
                    if (focusedCard === null) {
                      e.preventDefault();
                      e.stopPropagation();
                      setFocusedCard(index);
                    }
                  }}
                  style={{
                    transform: focusedCard === index 
                      ? `translate(calc(50vw - 50%), calc(50vh - 50%)) rotate(0deg)`
                      : `translate(calc(50vw + ${x}px - 50%), calc(85vh + ${y}px - 50%)) rotate(${cardRotation}deg)`,
                    transformOrigin: 'center bottom',
                    zIndex: focusedCard === index ? 60 : cardZIndex,
                  }}
                >
                  <div 
                    className={`w-64 bg-black rounded-2xl p-6 border border-white/10 shadow-lg transition-all duration-500 ease-out
                             ${focusedCard === index ? 'shadow-[0_50px_100px_-20px_rgba(255,255,255,0.15)] border-white/20 rotate-0 scale-150 opacity-100' : ''}
                             ${focusedCard !== null && focusedCard !== index ? 'scale-75 opacity-50 blur-sm' : ''}`}
                    style={{ 
                      height: focusedCard === index ? '335px' : `${cardHeightPx}px`
                    }}
                  >
                  {/* Link overlay for focused card */}
                  {focusedCard === index && (
                    <a
                      href={system.route}
                      className="absolute inset-0 z-0"
                    />
                  )}

                  
                  {/* Content */}
                  <div className="text-left h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {system.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm transition-opacity duration-300"
                         style={{ opacity: focusedCard === index ? 1 : 0.7 }}>
                        {system.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap justify-start gap-1 mb-4 opacity-70 transition-opacity duration-300"
                           style={{ opacity: focusedCard === index ? 1 : 0.7 }}>
                        {system.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="min-w-[80px] px-[10px] py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/50 text-center"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Call to action button - keep centered */}
                    <div className="text-center">
                      <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                        {system.status === "Complete" ? "Explore Project" : "Preview"}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

        {/* Header moved below */}
        {/* <div className="absolute bottom-8 left-0 right-0">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">
              Design Systems Playground
            </h1>
            <p className="text-lg text-black/80 max-w-2xl mx-auto leading-relaxed px-4">
              A collection of diverse design systems showcasing different approaches, 
              styles, and solutions for various industries and use cases.
            </p>
          </header>
        </div> */}
    </div>
  );
}
