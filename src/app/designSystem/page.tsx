'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function DesignSystemIndex() {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;
    const startY = e.clientY;
    let currentDragX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      currentDragX = deltaX;
      setDragOffset({ x: deltaX, y: deltaY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      const threshold = 100; // Reduced threshold for easier swiping
      
      if (Math.abs(currentDragX) > threshold) {
        // Card swiped away
        setCurrentCardIndex(prev => prev + 1);
      }
      
      setDragOffset({ x: 0, y: 0 });
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    const startX = e.touches[0].clientX;
    const startY = e.touches[0].clientY;
    let currentDragX = 0;

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;
      currentDragX = deltaX;
      setDragOffset({ x: deltaX, y: deltaY });
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      const threshold = 100; // Reduced threshold for easier swiping
      
      if (Math.abs(currentDragX) > threshold) {
        // Card swiped away
        setCurrentCardIndex(prev => prev + 1);
      }
      
      setDragOffset({ x: 0, y: 0 });
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, []);
  
  const designSystems = [
    // Empty cards on the left side to complete semicircle
    { id: "empty-1", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-2", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-3", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-4", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-5", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-6", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-7", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-8", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-9", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    
    {
      id: 1,
      name: "Healthcare Trust",
      description: "Refined minimalist design applied to healthcare - trustworthy, accessible, and clean",
      route: "/healthcare/designsystem",
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
    },
    
    // Empty cards on the right side to complete semicircle
    { id: "empty-10", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-11", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-12", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-13", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-14", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-15", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-16", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-17", name: "", description: "", features: [], status: "", route: "", isEmpty: true },
    { id: "empty-18", name: "", description: "", features: [], status: "", route: "", isEmpty: true }
  ];

  return (
    <div className="min-h-screen w-screen bg-yellow-50">
      {/* Mobile: Swipeable Deck */}
      <div className="md:hidden relative h-screen overflow-hidden flex items-center justify-center p-8">
        <div className="relative w-full max-w-xs h-[50vh]">
          {(() => {
            const realCards = designSystems.filter(system => !system.isEmpty);
            const totalCards = realCards.length;
            
            if (currentCardIndex >= totalCards) {
              // Show reload card
              return (
                <div className="absolute inset-0 bg-black rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between">
                  <div className="text-center flex-1 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">All Done! 🎉</h3>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => setCurrentCardIndex(0)}
                      className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium w-full"
                    >
                      Reload Deck
                    </button>
                  </div>
                </div>
              );
            }
            
            return realCards.slice(currentCardIndex).map((system, stackIndex) => {
              const actualIndex = currentCardIndex + stackIndex;
              const isTopCard = stackIndex === 0;
              const stackOffset = stackIndex * 4; // 4px offset per card
              const scale = 1 - (stackIndex * 0.02); // Slight scale decrease
              const cardRotation = isTopCard && isDragging ? dragOffset.x * 0.1 : stackIndex * 1; // Slight base rotation + drag rotation
              
              return (
                <div
                  key={`${system.id}-${actualIndex}`}
                  className="absolute inset-0 bg-black rounded-2xl p-6 border border-white/10 shadow-lg cursor-grab active:cursor-grabbing select-none"
                  style={{
                    transform: `
                      translate(${isTopCard ? dragOffset.x : stackOffset}px, ${isTopCard ? dragOffset.y : stackOffset}px) 
                      rotate(${cardRotation}deg) 
                      scale(${scale})
                    `,
                    zIndex: totalCards - stackIndex,
                    transition: isDragging && isTopCard ? 'none' : 'transform 0.3s ease'
                  }}
                  onMouseDown={isTopCard ? handleMouseDown : undefined}
                  onTouchStart={isTopCard ? handleTouchStart : undefined}
                >
                  <div className="text-left h-full flex flex-col justify-between pointer-events-none">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {system.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {system.description}
                      </p>
                      <div className="flex flex-wrap justify-start gap-1 mb-4">
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
                    <div className="text-center">
                      <a
                        href={system.route}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black pointer-events-auto"
                      >
                        {system.status === "Complete" ? "Explore Project" : "Preview"}
                      </a>
                    </div>
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </div>

      {/* Desktop: Semicircle (hidden on mobile) */}
      <div className="hidden md:block h-screen overflow-hidden">
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
            
            // Semicircle spread out with maximum radius
            const radius = 500; // Maximum radius for extreme spread
            const angleSpread = 180; // True semicircle
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
            let y = baseY + centerOffset + 300; // Push all cards down by 300px so buttons are completely hidden
            
            // Remove special adjustment - let middle card align with natural spread
            // All cards now follow the same positioning flow
            
            // Symmetric rotation for mirror effect
            // Cards tilt based on distance from center, not absolute angle
            const maxTilt = 15; // Maximum tilt in degrees
            const tiltDirection = index < middleIndex ? -1 : 1; // Left negative, right positive
            const cardRotation = (distanceFromMiddle / maxDistance) * maxTilt * tiltDirection;
            
            // Z-index flows linearly, but empty cards always stay below real cards
            // Right empty cards (index 18+) have reverse flow
            let cardZIndex;
            if (system.isEmpty) {
              if (index >= 18) {
                // Right empty cards: reverse flow (high to low)
                cardZIndex = (totalCards - index) * 5;
              } else {
                // Left empty cards: normal flow (low to high)
                cardZIndex = index * 5;
              }
            } else {
              // Content cards: highest z-index with linear flow
              cardZIndex = (index * 10) + 500;
            }
            
            // Custom height pattern for all cards with symmetric progression
            let cardHeightPx;
            
            if (system.isEmpty) {
              // Empty cards: create flow toward/away from content cards (very reduced heights)
              if (index < 9) {
                // Left empty cards (0-8): increase toward content cards
                // Heights reduced by ~150px: 200, 250, 300, 350, 370, 390, 410, 430, 450
                const leftHeights = [200, 250, 300, 350, 370, 390, 410, 430, 450];
                cardHeightPx = leftHeights[index];
              } else {
                // Right empty cards (18-26): decrease away from content cards
                // Heights reduced by ~150px: 450, 430, 410, 390, 370, 350, 300, 250, 200
                const rightIndex = index - 18; // Convert to 0-8 range
                const rightHeights = [450, 430, 410, 390, 370, 350, 300, 250, 200];
                cardHeightPx = rightHeights[rightIndex];
              }
            } else {
              // Content cards: symmetric height pattern (very reduced heights)
              const contentCards = designSystems.filter(s => !s.isEmpty);
              const contentIndex = contentCards.findIndex(s => s.id === system.id);
              
              // Full symmetric height progression reduced by ~150px
              const fullHeightProgression = [470, 516, 573, 628, 680, 628, 573, 516, 470];
              
              cardHeightPx = fullHeightProgression[contentIndex];
            }
            
            return (
              <div key={system.id}>
                {/* Visual card that moves to center and is directly clickable */}
                <div
                  className={`group absolute transition-all duration-500 ease-out ${system.isEmpty ? 'pointer-events-none' : 'cursor-pointer pointer-events-auto'}`}
                  onClick={(e) => {
                    // Only allow focus if no card is currently focused and not empty
                    if (focusedCard === null && !system.isEmpty) {
                      e.preventDefault();
                      e.stopPropagation();
                      setFocusedCard(index);
                    }
                  }}
                  style={{
                    transform: focusedCard === index 
                      ? `translate(calc(50vw - 50%), calc(50vh - 50%)) rotate(0deg)`
                      : `translate(calc(50vw + ${x}px - 50%), calc(75vh + ${y}px - 50%)) rotate(${cardRotation}deg)`,
                    transformOrigin: 'center bottom',
                    zIndex: focusedCard === index ? 60 : cardZIndex,
                  }}
                >
                  <div 
                    className={`w-64 bg-black rounded-2xl p-6 border border-white/10 shadow-lg transition-all duration-500 ease-out scale-110
                             ${!system.isEmpty && focusedCard === index ? 'shadow-[0_50px_100px_-20px_rgba(255,255,255,0.15)] border-white/20 rotate-0 scale-150 opacity-100' : ''}
                             ${!system.isEmpty && focusedCard !== null && focusedCard !== index ? 'scale-75 opacity-50 blur-sm' : ''}`}
                    style={{ 
                      height: (focusedCard === index && !system.isEmpty) ? '335px' : `${cardHeightPx}px`
                    }}
                  >
                  {/* Link overlay for focused card */}
                  {focusedCard === index && !system.isEmpty && (
                    <a
              href={system.route}
                      className="absolute inset-0 z-0"
                    />
                  )}

                  {/* Content - only show for non-empty cards */}
                  {!system.isEmpty && (
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
                  )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Sheet */}
      {focusedCard !== null && (
        <div className="md:hidden fixed inset-0 z-50 flex items-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setFocusedCard(null)}
          />
          {/* Bottom Sheet */}
          <div className="relative w-full bg-black rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-6"></div>
            {(() => {
              const system = designSystems.filter(s => !s.isEmpty)[focusedCard];
              return system ? (
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {system.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {system.description}
                  </p>
                  <div className="flex flex-wrap justify-start gap-2 mb-6">
                    {system.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="text-center">
                    <a
                      href={system.route}
                      className="inline-flex items-center px-6 py-3 rounded-full text-lg font-medium bg-white text-black w-full justify-center"
                    >
                      {system.status === "Complete" ? "Explore Project" : "Preview"}
                    </a>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
      </div>
      )}
    </div>
  );
}