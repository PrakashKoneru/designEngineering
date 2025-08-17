export default function HealthcareDesignSystem() {
  const colorPalette = [
    // Healthcare Blue Scale
    { name: 'Trust Blue 50', hex: '#eff6ff', usage: 'Lightest backgrounds' },
    { name: 'Trust Blue 100', hex: '#dbeafe', usage: 'Very light surfaces' },
    { name: 'Trust Blue 200', hex: '#bfdbfe', usage: 'Light borders' },
    { name: 'Trust Blue 300', hex: '#93c5fd', usage: 'Medium light accents' },
    { name: 'Trust Blue 400', hex: '#60a5fa', usage: 'Medium blue actions' },
    { name: 'Trust Blue 500', hex: '#3b82f6', usage: 'Primary actions' },
    { name: 'Trust Blue 600', hex: '#2563eb', usage: 'Emphasis' },
    { name: 'Trust Blue 700', hex: '#1d4ed8', usage: 'Headings' },
    { name: 'Trust Blue 800', hex: '#1e40af', usage: 'Text' },
    { name: 'Trust Blue 900', hex: '#1e3a8a', usage: 'Deep elements' },
    
    // Healthcare Green Scale
    { name: 'Health Green 50', hex: '#f0fdf4', usage: 'Success backgrounds' },
    { name: 'Health Green 100', hex: '#dcfce7', usage: 'Success surfaces' },
    { name: 'Health Green 200', hex: '#bbf7d0', usage: 'Success borders' },
    { name: 'Health Green 300', hex: '#86efac', usage: 'Success accents' },
    { name: 'Health Green 400', hex: '#4ade80', usage: 'Success actions' },
    { name: 'Health Green 500', hex: '#22c55e', usage: 'Primary success' },
    { name: 'Health Green 600', hex: '#16a34a', usage: 'Success emphasis' },
    { name: 'Health Green 700', hex: '#15803d', usage: 'Success headings' },
    { name: 'Health Green 800', hex: '#166534', usage: 'Success text' },
    { name: 'Health Green 900', hex: '#14532d', usage: 'Deep success' },
    
    // Neutral Gray Scale
    { name: 'Neutral 50', hex: '#f9fafb', usage: 'Lightest backgrounds' },
    { name: 'Neutral 100', hex: '#f3f4f6', usage: 'Very light surfaces' },
    { name: 'Neutral 200', hex: '#e5e7eb', usage: 'Light borders' },
    { name: 'Neutral 300', hex: '#d1d5db', usage: 'Medium light' },
    { name: 'Neutral 400', hex: '#9ca3af', usage: 'Medium accents' },
    { name: 'Neutral 500', hex: '#6b7280', usage: 'Primary text' },
    { name: 'Neutral 600', hex: '#4b5563', usage: 'Emphasis' },
    { name: 'Neutral 700', hex: '#374151', usage: 'Headings' },
    { name: 'Neutral 800', hex: '#1f2937', usage: 'Dark text' },
    { name: 'Neutral 900', hex: '#111827', usage: 'Deepest elements' },
  ];

  const strokeStyles = [
    { name: 'Hairline', width: '0.5px', color: '#6b7280', usage: 'Subtle borders, dividers' },
    { name: 'Fine', width: '0.625px', color: '#9ca3af', usage: 'Secondary elements, hints' },
    { name: 'Thin', width: '0.75px', color: '#3b82f6', usage: 'Primary elements, focus' },
    { name: 'Medium', width: '1px', color: '#1d4ed8', usage: 'Strong emphasis, headings' },
  ];

  const healthcareComponents = [
    { name: 'Doctor Card', style: 'Clean profile with trust indicators', color: '#3b82f6' },
    { name: 'Appointment Button', style: 'Clear call-to-action for booking', color: '#22c55e' },
    { name: 'Medical Form', style: 'Accessible input fields', color: '#6b7280' },
    { name: 'Health Status', style: 'Visual health indicators', color: '#16a34a' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      {/* Healthcare Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-blue-900 mb-6 tracking-wide">
            Healthcare Trust Design System
          </h1>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Refined minimalist design principles applied to healthcare applications. 
            Clean, trustworthy, and accessible design that builds confidence and clarity.
          </p>
        </div>
        
        {/* Design Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 rounded-md bg-white border border-blue-200 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-md mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-400 rounded-sm"></div>
            </div>
            <h3 className="font-medium text-blue-800 mb-2">Trustworthy</h3>
            <p className="text-sm text-blue-600">Clean, professional design that builds confidence</p>
          </div>
          
          <div className="text-center p-8 rounded-md bg-white border border-green-200 shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-md mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border border-green-400 rounded-sm"></div>
            </div>
            <h3 className="font-medium text-green-800 mb-2">Accessible</h3>
            <p className="text-sm text-green-600">WCAG compliant, easy to read and navigate</p>
          </div>
          
          <div className="text-center p-8 rounded-md bg-white border border-blue-200 shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-md mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border border-blue-400 rounded-sm"></div>
            </div>
            <h3 className="font-medium text-blue-800 mb-2">Refined</h3>
            <p className="text-sm text-blue-600">Minimalist elegance with purposeful design</p>
          </div>
        </div>
      </div>

      {/* Product Overview */}
      <div className="max-w-6xl mx-auto mb-20">
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            Product: HealthConnect
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            A comprehensive doctor booking and consultation platform designed with accessibility and trust in mind.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Core Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Doctor profiles with specialties & ratings</li>
                <li>• Appointment booking system</li>
                <li>• Video consultation interface</li>
                <li>• Medical history dashboard</li>
                <li>• Prescription management</li>
                <li>• Health tracking widgets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Design Approach</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Refined minimalist aesthetic</li>
                <li>• Trust-building color palette</li>
                <li>• Accessible typography</li>
                <li>• Clean, organized layouts</li>
                <li>• Medical-specific components</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Color System */}
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Healthcare Color Palette */}
        <section>
          <h2 className="text-3xl font-light text-blue-900 mb-8 text-center">
            Healthcare Color System
          </h2>
          <p className="text-center text-blue-700 mb-10 max-w-2xl mx-auto">
            A carefully curated palette of trust blues, health greens, and neutral grays 
            that work harmoniously with off-white backgrounds and thin strokes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalette.map((color) => (
              <div 
                key={color.name}
                className="group relative overflow-hidden rounded-md bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Color Swatch */}
                <div 
                  className="h-24 w-full"
                  style={{ backgroundColor: color.hex }}
                />
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-blue-800">
                      {color.name}
                    </span>
                    <span className="text-sm text-blue-500 font-mono">
                      {color.hex}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stroke System */}
        <section>
          <h2 className="text-3xl font-light text-blue-900 mb-8 text-center">
            Stroke System
          </h2>
          <p className="text-center text-blue-700 mb-10 max-w-2xl mx-auto">
            Consistent stroke weights that create hierarchy and guide attention 
            without overwhelming the design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strokeStyles.map((stroke) => (
              <div 
                key={stroke.name}
                className="group relative overflow-hidden rounded-md bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6 text-center">
                  {/* Stroke Example */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-md flex items-center justify-center bg-blue-50">
                    <div 
                      className="w-12 h-12 rounded-sm border"
                      style={{ 
                        borderWidth: stroke.width,
                        borderColor: stroke.color
                      }}
                    />
                  </div>
                  
                  <h3 className="font-medium text-blue-800 mb-2">
                    {stroke.name}
                  </h3>
                  
                  <p className="text-sm text-blue-600 mb-3">
                    {stroke.width} stroke
                  </p>
                  
                  <p className="text-xs text-gray-500">
                    {stroke.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Healthcare Components */}
        <section>
          <h2 className="text-3xl font-light text-blue-900 mb-8 text-center">
            Healthcare Components
          </h2>
          <p className="text-center text-blue-700 mb-10 max-w-2xl mx-auto">
            Medical-specific UI components that embody the refined design principles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthcareComponents.map((component) => (
              <div 
                key={component.name}
                className="group relative overflow-hidden rounded-md bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-6 text-center">
                  {/* Component Placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-md flex items-center justify-center bg-blue-50">
                    <div 
                      className="w-12 h-12 border rounded-sm"
                      style={{ 
                        borderWidth: '1px',
                        borderColor: component.color
                      }}
                    />
                  </div>
                  
                  <h3 className="font-medium text-blue-800 mb-2">
                    {component.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {component.style}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography System */}
        <section>
          <h2 className="text-3xl font-light text-blue-900 mb-8 text-center">
            Typography System
          </h2>
          <p className="text-center text-blue-700 mb-10 max-w-2xl mx-auto">
            Accessible typography that maintains focus and readability 
            while supporting the healthcare design aesthetic.
          </p>
          
          <div className="bg-white rounded-md border border-blue-200 p-10 shadow-sm">
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-light text-blue-900 tracking-wide">
                Heading 1
              </h1>
              <h2 className="text-3xl font-light text-blue-900 tracking-wide">
                Heading 2
              </h2>
              <h3 className="text-xl font-medium text-blue-900 tracking-wide">
                Heading 3
              </h3>
              <p className="text-lg text-blue-800 leading-relaxed max-w-2xl mx-auto">
                Body text that flows naturally and supports the healthcare design elements. 
                Simple, clean, and purposeful for medical applications.
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Secondary text that provides context without overwhelming. 
                Every word has purpose in the healthcare design system.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Elements */}
        <section>
          <h2 className="text-3xl font-light text-blue-900 mb-8 text-center">
            Interactive Elements
          </h2>
          <p className="text-center text-blue-700 mb-10 max-w-2xl mx-auto">
            Clean, purposeful interactions that demonstrate the healthcare design principles 
            in practice.
          </p>
          
          <div className="bg-white rounded-md border border-blue-200 p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Buttons */}
              <div>
                <h4 className="font-medium text-blue-800 mb-6 text-lg">Button System</h4>
                <div className="space-y-4">
                  <button 
                    className="px-8 py-2.5 text-white font-light tracking-wide transition-all duration-300 border-0 rounded-md"
                    style={{ backgroundColor: '#3b82f6' }}
                  >
                    Book Appointment
                  </button>
                  
                  <button 
                    className="px-8 py-2.5 bg-transparent text-blue-700 font-light tracking-wide transition-all duration-300 border rounded-md"
                    style={{ borderWidth: '0.5px', borderColor: '#3b82f6' }}
                  >
                    View Profile
                  </button>
                  
                  <button 
                    className="px-8 py-2.5 bg-transparent text-green-600 font-light tracking-wide transition-all duration-300 border rounded-md"
                    style={{ borderWidth: '0.5px', borderColor: '#22c55e' }}
                  >
                    Schedule Follow-up
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h4 className="font-medium text-blue-800 mb-6 text-lg">Medical Cards</h4>
                <div className="space-y-4">
                  <div className="p-6 bg-white border rounded-md"
                       style={{ borderWidth: '0.5px', borderColor: '#bfdbfe' }}>
                    <h5 className="font-light text-blue-800 mb-3 text-lg tracking-wide">Doctor Profile</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">Clean background with trust indicators</p>
                  </div>
                  
                  <div className="p-6 bg-green-50 border rounded-md"
                       style={{ borderWidth: '0.5px', borderColor: '#bbf7d0' }}>
                    <h5 className="font-light text-green-800 mb-3 text-lg tracking-wide">Health Status</h5>
                    <p className="text-sm text-green-600 leading-relaxed">Success indicators with refined borders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section>
          <div className="bg-gradient-to-r from-blue-900 to-green-800 rounded-md p-10 text-white text-center">
            <h3 className="text-2xl font-light mb-6">Healthcare Design Philosophy</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              "Healthcare design should be trustworthy, accessible, and refined. Every element serves 
              to build confidence, every interaction promotes clarity, and every visual choice supports 
              the critical nature of medical applications."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-4 rounded-lg bg-white/10">
                <span className="text-xl">🏥</span>
                <p className="text-sm mt-2">Trustworthy</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10">
                <span className="text-xl">♿</span>
                <p className="text-sm mt-2">Accessible</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10">
                <span className="text-xl">✨</span>
                <p className="text-sm mt-2">Refined</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
