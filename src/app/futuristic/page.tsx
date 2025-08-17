export default function FuturisticDesignSystem() {
  const marsColorPalette = [
    // Deep Mars Reds
    { name: 'Mars Red 50', hex: '#fef2f2', usage: 'Lightest red backgrounds' },
    { name: 'Mars Red 100', hex: '#fee2e2', usage: 'Very light red surfaces' },
    { name: 'Mars Red 200', hex: '#fecaca', usage: 'Light red borders' },
    { name: 'Mars Red 300', hex: '#fca5a5', usage: 'Medium light red accents' },
    { name: 'Mars Red 400', hex: '#f87171', usage: 'Medium red actions' },
    { name: 'Mars Red 500', hex: '#ef4444', usage: 'Primary red' },
    { name: 'Mars Red 600', hex: '#dc2626', usage: 'Red emphasis' },
    { name: 'Mars Red 700', hex: '#b91c1c', usage: 'Red headings' },
    { name: 'Mars Red 800', hex: '#991b1b', usage: 'Dark red text' },
    { name: 'Mars Red 900', hex: '#7f1d1d', usage: 'Deepest red elements' },
    
    // Desert Oranges
    { name: 'Desert Orange 50', hex: '#fff7ed', usage: 'Lightest orange backgrounds' },
    { name: 'Desert Orange 100', hex: '#ffedd5', usage: 'Very light orange surfaces' },
    { name: 'Desert Orange 200', hex: '#fed7aa', usage: 'Light orange borders' },
    { name: 'Desert Orange 300', hex: '#fdba74', usage: 'Medium light orange accents' },
    { name: 'Desert Orange 400', hex: '#fb923c', usage: 'Medium orange actions' },
    { name: 'Desert Orange 500', hex: '#f97316', usage: 'Primary orange' },
    { name: 'Desert Orange 600', hex: '#ea580c', usage: 'Orange emphasis' },
    { name: 'Desert Orange 700', hex: '#c2410c', usage: 'Orange headings' },
    { name: 'Desert Orange 800', hex: '#9a3412', usage: 'Dark orange text' },
    { name: 'Desert Orange 900', hex: '#7c2d12', usage: 'Deepest orange elements' },
    
    // Space Blacks & Grays
    { name: 'Space Black 50', hex: '#f8fafc', usage: 'Lightest space backgrounds' },
    { name: 'Space Black 100', hex: '#f1f5f9', usage: 'Very light space surfaces' },
    { name: 'Space Black 200', hex: '#e2e8f0', usage: 'Light space borders' },
    { name: 'Space Black 300', hex: '#cbd5e1', usage: 'Medium light space' },
    { name: 'Space Black 400', hex: '#94a3b8', usage: 'Medium space accents' },
    { name: 'Space Black 500', hex: '#64748b', usage: 'Primary space text' },
    { name: 'Space Black 600', hex: '#475569', usage: 'Space emphasis' },
    { name: 'Space Black 700', hex: '#334155', usage: 'Space headings' },
    { name: 'Space Black 800', hex: '#1e293b', usage: 'Dark space text' },
    { name: 'Space Black 900', hex: '#0f172a', usage: 'Deepest space elements' },
    
    // Accent Colors
    { name: 'Neon Blue', hex: '#3b82f6', usage: 'Glowing blue accents' },
    { name: 'Electric Purple', hex: '#8b5cf6', usage: 'Glowing purple elements' },
    { name: 'Mars Dust', hex: '#92400e', usage: 'Dusty brown surfaces' },
    { name: 'Rust', hex: '#b45309', usage: 'Rusty orange accents' },
  ];

  const strokeStyles = [
    { name: 'Hairline', width: '0.5px', color: '#64748b', usage: 'Subtle borders, dividers' },
    { name: 'Fine', width: '0.625px', color: '#94a3b8', usage: 'Secondary elements, hints' },
    { name: 'Thin', width: '0.75px', color: '#ef4444', usage: 'Primary elements, focus' },
    { name: 'Medium', width: '1px', color: '#b91c1c', usage: 'Strong emphasis, headings' },
    { name: 'Glow', width: '2px', color: '#3b82f6', usage: 'Glowing elements, highlights' },
  ];

  const marsComponents = [
    { name: 'Mission Card', style: 'Space mission information with glow effects', color: '#ef4444' },
    { name: 'Rover Status', style: 'Mars rover data with futuristic UI', color: '#f97316' },
    { name: 'Astronaut Profile', style: 'Astronaut information with space aesthetics', color: '#8b5cf6' },
    { name: 'Launch Countdown', style: 'Mission countdown with glowing elements', color: '#3b82f6' },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-red-600 mb-4">
            Futuristic Mars Design System
          </h1>
          <p className="text-xl text-red-300 max-w-3xl mx-auto">
            Sci-fi inspired, glowing elements, and advanced technology aesthetics inspired by Mars exploration
          </p>
        </header>

        <div className="grid gap-8">
          {/* Product Overview */}
          <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <h2 className="text-3xl font-semibold text-red-200 mb-4">
              Product: MarsMission
            </h2>
            <p className="text-lg text-red-100 mb-6">
              A Mars exploration and space news platform designed with futuristic, sci-fi aesthetics inspired by the red planet.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-red-200 mb-3">Core Features</h3>
                <ul className="space-y-2 text-red-100">
                  <li>• Mars mission updates & live feeds</li>
                  <li>• Interactive Mars map & rover locations</li>
                  <li>• Space news & articles</li>
                  <li>• Mission countdown timers</li>
                  <li>• Astronaut profiles & interviews</li>
                  <li>• Space technology showcase</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-200 mb-3">Design Principles</h3>
                <ul className="space-y-2 text-red-100">
                  <li>• Deep Mars reds & desert oranges</li>
                  <li>• Glowing elements & particle effects</li>
                  <li>• Futuristic typography</li>
                  <li>• High contrast, sci-fi aesthetic</li>
                  <li>• Advanced technology feel</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mars Color System */}
          <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <h2 className="text-3xl font-semibold text-red-200 mb-6">
              Mars Color System
            </h2>
            <p className="text-center text-red-100 mb-10 max-w-2xl mx-auto">
              Inspired by the deep reds and desert oranges of the Martian landscape, 
              with space blacks and glowing accent colors.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marsColorPalette.map((color) => (
                <div 
                  key={color.name}
                  className="group relative overflow-hidden rounded-md bg-black/50 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300"
                >
                  {/* Color Swatch */}
                  <div 
                    className="h-24 w-full"
                    style={{ backgroundColor: color.hex }}
                  />
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-red-200">
                        {color.name}
                      </span>
                      <span className="text-sm text-red-400 font-mono">
                        {color.hex}
                      </span>
                    </div>
                    
                    <p className="text-sm text-red-100 leading-relaxed">
                      {color.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stroke System */}
          <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <h2 className="text-3xl font-semibold text-red-200 mb-6">
              Futuristic Stroke System
            </h2>
            <p className="text-center text-red-100 mb-10 max-w-2xl mx-auto">
              Stroke weights that create hierarchy and guide attention 
              with glowing effects for futuristic elements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {strokeStyles.map((stroke) => (
                <div 
                  key={stroke.name}
                  className="group relative overflow-hidden rounded-md bg-black/50 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300"
                >
                  <div className="p-6 text-center">
                    {/* Stroke Example */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-md flex items-center justify-center bg-red-900/50">
                      <div 
                        className="w-12 h-12 rounded-sm border"
                        style={{ 
                          borderWidth: stroke.width,
                          borderColor: stroke.color,
                          boxShadow: stroke.name === 'Glow' ? `0 0 10px ${stroke.color}` : 'none'
                        }}
                      />
                    </div>
                    
                    <h3 className="font-medium text-red-200 mb-2">
                      {stroke.name}
                    </h3>
                    
                    <p className="text-sm text-red-300 mb-3">
                      {stroke.width} stroke
                    </p>
                    
                    <p className="text-xs text-red-100">
                      {stroke.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mars Components */}
          <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <h2 className="text-3xl font-semibold text-red-200 mb-6">
              Mars Mission Components
            </h2>
            <p className="text-center text-red-100 mb-10 max-w-2xl mx-auto">
              Space-specific UI components that embody the futuristic Mars design principles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marsComponents.map((component) => (
                <div 
                  key={component.name}
                  className="group relative overflow-hidden rounded-md bg-black/50 border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300"
                >
                  <div className="p-6 text-center">
                    {/* Component Placeholder */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-md flex items-center justify-center bg-red-900/50">
                      <div 
                        className="w-12 h-12 border rounded-sm"
                        style={{ 
                          borderWidth: '1px',
                          borderColor: component.color,
                          boxShadow: `0 0 15px ${component.color}`
                        }}
                      />
                    </div>
                    
                    <h3 className="font-medium text-red-200 mb-2">
                      {component.name}
                    </h3>
                    
                    <p className="text-sm text-red-100 leading-relaxed">
                      {component.style}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography System */}
          <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <h2 className="text-3xl font-semibold text-red-200 mb-6">
              Futuristic Typography
            </h2>
            <p className="text-center text-red-100 mb-10 max-w-2xl mx-auto">
              Typography that maintains focus and readability 
              while supporting the futuristic Mars aesthetic.
            </p>
            
            <div className="bg-black/50 rounded-md border border-red-500/30 p-10 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 tracking-wide">
                  Heading 1
                </h1>
                <h2 className="text-3xl font-semibold text-red-200 tracking-wide">
                  Heading 2
                </h2>
                <h3 className="text-xl font-medium text-red-300 tracking-wide">
                  Heading 3
                </h3>
                <p className="text-lg text-red-100 leading-relaxed max-w-2xl mx-auto">
                  Body text that flows naturally and supports the futuristic Mars design elements. 
                  Simple, clean, and purposeful for space applications.
                </p>
                <p className="text-base text-red-200 leading-relaxed max-w-2xl mx-auto">
                  Secondary text that provides context without overwhelming. 
                  Every word has purpose in the Mars mission design system.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <h2 className="text-3xl font-semibold text-red-200 mb-6">
              Futuristic Interactive Elements
            </h2>
            <p className="text-center text-red-100 mb-10 max-w-2xl mx-auto">
              Clean, purposeful interactions that demonstrate the Mars design principles 
              in practice.
            </p>
            
            <div className="bg-black/50 rounded-md border border-red-500/30 p-10 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Buttons */}
                <div>
                  <h4 className="font-medium text-red-200 mb-6 text-lg">Button System</h4>
                  <div className="space-y-4">
                    <button 
                      className="px-8 py-2.5 text-white font-semibold tracking-wide transition-all duration-300 border-0 rounded-md shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                      style={{ backgroundColor: '#ef4444' }}
                    >
                      Launch Mission
                    </button>
                    
                    <button 
                      className="px-8 py-2.5 bg-transparent text-red-300 font-semibold tracking-wide transition-all duration-300 border rounded-md shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                      style={{ borderWidth: '1px', borderColor: '#ef4444' }}
                    >
                      View Rover
                    </button>
                    
                    <button 
                      className="px-8 py-2.5 bg-transparent text-orange-300 font-semibold tracking-wide transition-all duration-300 border rounded-md shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                      style={{ borderWidth: '1px', borderColor: '#f97316' }}
                    >
                      Track Mission
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <h4 className="font-medium text-red-200 mb-6 text-lg">Mission Cards</h4>
                  <div className="space-y-4">
                    <div className="p-6 bg-black/30 border rounded-md shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                         style={{ borderWidth: '1px', borderColor: '#ef4444' }}>
                      <h5 className="font-semibold text-red-200 mb-3 text-lg tracking-wide">Mission Status</h5>
                      <p className="text-sm text-red-100 leading-relaxed">Active mission with glowing indicators</p>
                    </div>
                    
                    <div className="p-6 bg-black/30 border rounded-md shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                         style={{ borderWidth: '1px', borderColor: '#f97316' }}>
                      <h5 className="font-semibold text-orange-200 mb-3 text-lg tracking-wide">Rover Data</h5>
                      <p className="text-sm text-orange-100 leading-relaxed">Mars rover telemetry with futuristic UI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Philosophy */}
          <section className="bg-gradient-to-r from-red-900 to-orange-900 rounded-md p-10 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)] text-center">
            <h3 className="text-2xl font-semibold text-red-100 mb-6">Mars Mission Design Philosophy</h3>
            <p className="text-lg text-red-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              "Futuristic design should inspire wonder and confidence. Every element serves 
              to advance human exploration, every interaction promotes discovery, and every 
              visual choice supports the incredible journey to Mars and beyond."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-black/20 border border-red-500/30">
                <span className="text-xl">🚀</span>
                <p className="text-sm mt-2 text-red-200">Exploration</p>
              </div>
              <div className="p-4 rounded-lg bg-black/20 border border-orange-500/30">
                <span className="text-xl">🔴</span>
                <p className="text-sm mt-2 text-orange-200">Mars-Inspired</p>
              </div>
              <div className="p-4 rounded-lg bg-black/20 border border-red-500/30">
                <span className="text-xl">✨</span>
                <p className="text-sm mt-2 text-red-200">Futuristic</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
