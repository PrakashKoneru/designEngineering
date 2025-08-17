export default function DesignSystem1() {
  const colorPalette = [
    // Blue Monochromatic Scale
    { name: 'Blue 50', hex: '#eff6ff', usage: 'Lightest blue backgrounds' },
    { name: 'Blue 100', hex: '#dbeafe', usage: 'Very light blue surfaces' },
    { name: 'Blue 200', hex: '#bfdbfe', usage: 'Light blue borders' },
    { name: 'Blue 300', hex: '#93c5fd', usage: 'Medium light blue' },
    { name: 'Blue 400', hex: '#60a5fa', usage: 'Medium blue accents' },
    { name: 'Blue 500', hex: '#3b82f6', usage: 'Primary blue actions' },
    { name: 'Blue 600', hex: '#2563eb', usage: 'Dark blue emphasis' },
    { name: 'Blue 700', hex: '#1d4ed8', usage: 'Darker blue headings' },
    { name: 'Blue 800', hex: '#1e40af', usage: 'Darkest blue text' },
    { name: 'Blue 900', hex: '#1e3a8a', usage: 'Deepest blue elements' },
    
    // Gray Monochromatic Scale
    { name: 'Gray 50', hex: '#f9fafb', usage: 'Lightest gray backgrounds' },
    { name: 'Gray 100', hex: '#f3f4f6', usage: 'Very light gray surfaces' },
    { name: 'Gray 200', hex: '#e5e7eb', usage: 'Light gray borders' },
    { name: 'Gray 300', hex: '#d1d5db', usage: 'Medium light gray' },
    { name: 'Gray 400', hex: '#9ca3af', usage: 'Medium gray accents' },
    { name: 'Gray 500', hex: '#6b7280', usage: 'Primary gray text' },
    { name: 'Gray 600', hex: '#4b5563', usage: 'Dark gray emphasis' },
    { name: 'Gray 700', hex: '#374151', usage: 'Darker gray headings' },
    { name: 'Gray 800', hex: '#1f2937', usage: 'Darkest gray text' },
    { name: 'Gray 900', hex: '#111827', usage: 'Deepest gray elements' },
  ];

  const strokeStyles = [
    { name: 'Hairline', width: '0.5px', color: '#6b7280', usage: 'Subtle borders, dividers' },
    { name: 'Fine', width: '0.625px', color: '#9ca3af', usage: 'Secondary elements, hints' },
    { name: 'Thin', width: '0.75px', color: '#3b82f6', usage: 'Primary elements, focus' },
    { name: 'Medium', width: '1px', color: '#1d4ed8', usage: 'Strong emphasis, headings' },
  ];

  const illustrationExamples = [
    { name: 'Minimal Icon', style: 'Simple geometric shapes with thin strokes', color: '#3b82f6' },
    { name: 'Line Art', style: 'Continuous flowing lines with consistent weight', color: '#6b7280' },
    { name: 'Abstract Form', style: 'Organic shapes with delicate outlines', color: '#374151' },
    { name: 'Pattern Element', style: 'Repeating motifs with thin borders', color: '#60a5fa' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Refined Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-slate-800 mb-6 tracking-wide">
            Refined Minimalist
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Minimalist elegance through thin strokes, off-white backgrounds, and purposeful design. 
            Every element serves a purpose, every stroke has intention.
          </p>
        </div>
        
        {/* Design Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 rounded-md bg-white border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-md mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-slate-400 rounded-sm"></div>
            </div>
            <h3 className="font-medium text-slate-800 mb-2">Minimalist</h3>
            <p className="text-sm text-slate-600">Clean, purposeful design without excess</p>
          </div>
          
          <div className="text-center p-8 rounded-md bg-white border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-md mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border border-slate-400 rounded-sm"></div>
            </div>
            <h3 className="font-medium text-slate-800 mb-2">Precise</h3>
            <p className="text-sm text-slate-600">Thin strokes with exacting attention</p>
          </div>
          
          <div className="text-center p-8 rounded-md bg-white border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-md mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border border-blue-400 rounded-sm"></div>
            </div>
            <h3 className="font-medium text-slate-800 mb-2">Elegant</h3>
            <p className="text-sm text-slate-600">Sophisticated simplicity in every detail</p>
          </div>
        </div>
      </div>

      {/* Color System */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Refined Color Palette */}
        <section>
          <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
            Color System
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            A carefully curated palette of blues and grays that work harmoniously 
            with off-white backgrounds and thin strokes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalette.map((color) => (
              <div 
                key={color.name}
                className="group relative overflow-hidden rounded-md bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Color Swatch */}
                <div 
                  className="h-24 w-full"
                  style={{ backgroundColor: color.hex }}
                />
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-800">
                      {color.name}
                    </span>
                    <span className="text-sm text-slate-500 font-mono">
                      {color.hex}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stroke System */}
        <section>
          <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
            Stroke System
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Consistent stroke weights that create hierarchy and guide attention 
            without overwhelming the design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strokeStyles.map((stroke) => (
              <div 
                key={stroke.name}
                className="group relative overflow-hidden rounded-md bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6 text-center">
                  {/* Stroke Example */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-md flex items-center justify-center bg-slate-50">
                    <div 
                      className="w-12 h-12 rounded-sm border"
                      style={{ 
                        borderWidth: stroke.width,
                        borderColor: stroke.color
                      }}
                    />
                  </div>
                  
                  <h3 className="font-medium text-slate-800 mb-2">
                    {stroke.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-3">
                    {stroke.width} stroke
                  </p>
                  
                  <p className="text-xs text-slate-500">
                    {stroke.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
            Typography System
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Single color hierarchy that maintains focus and readability 
            while supporting the refined design aesthetic.
          </p>
          
          <div className="bg-white rounded-md border border-slate-200 p-10 shadow-sm">
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-light text-slate-800 tracking-wide">
                Heading 1
              </h1>
              <h2 className="text-3xl font-light text-slate-800 tracking-wide">
                Heading 2
              </h2>
              <h3 className="text-xl font-medium text-slate-800 tracking-wide">
                Heading 3
              </h3>
              <p className="text-lg text-slate-800 leading-relaxed max-w-2xl mx-auto">
                Body text that flows naturally and supports the refined design elements. 
                Simple, clean, and purposeful.
              </p>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Secondary text that provides context without overwhelming. 
                Every word has purpose in the refined design system.
              </p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section>
          <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">
            Component Library
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Essential UI components that embody the refined design principles.
          </p>
          
          <div className="bg-white rounded-md border border-slate-200 p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Buttons */}
              <div>
                <h4 className="font-medium text-slate-800 mb-6 text-lg">Button System</h4>
                <div className="space-y-4">
                  <button 
                    className="px-8 py-2.5 text-white font-light tracking-wide transition-all duration-300 border-0 rounded-md"
                    style={{ backgroundColor: '#3b82f6' }}
                  >
                    Primary Action
                  </button>
                  
                  <button 
                    className="px-8 py-2.5 bg-transparent text-slate-700 font-light tracking-wide transition-all duration-300 border rounded-md"
                    style={{ borderWidth: '0.5px', borderColor: '#6b7280' }}
                  >
                    Secondary Action
                  </button>
                  
                  <button 
                    className="px-8 py-2.5 bg-transparent text-slate-500 font-light tracking-wide transition-all duration-300 border rounded-md"
                    style={{ borderWidth: '0.5px', borderColor: '#9ca3af' }}
                  >
                    Tertiary Action
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h4 className="font-medium text-slate-800 mb-6 text-lg">Card Components</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-white border rounded-md"
                       style={{ borderWidth: '0.5px', borderColor: '#e5e7eb' }}>
                    <h5 className="font-light text-slate-800 mb-3 text-lg tracking-wide">Info Card</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">Clean background with ultra-thin border</p>
                  </div>
                  
                  <div className="p-6 bg-slate-50 border rounded-md"
                       style={{ borderWidth: '0.5px', borderColor: '#d1d5db' }}>
                    <h5 className="font-light text-slate-800 mb-3 text-lg tracking-wide">Surface Card</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">Subtle surface with refined border</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section>
          <div className="bg-slate-800 rounded-md p-10 text-white text-center">
            <h3 className="text-2xl font-light mb-6">Refined Design Philosophy</h3>
            <p className="text-lg text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              "Design should be purposeful and elegant. Every element serves a function, 
              every stroke has intention, and every color choice supports clarity. 
              Less is more, but what remains must be perfect."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-white/10">
                <span className="text-xl">🎯</span>
                <p className="text-sm mt-2">Purposeful</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10">
                <span className="text-xl">✏️</span>
                <p className="text-sm mt-2">Precise</p>
              </div>
              <div className="p-4 rounded-lg bg-white/2">
                <span className="text-xl">✨</span>
                <p className="text-sm mt-2">Elegant</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
