import './mars-design-system.css';
import { MarsLogoShowcase } from './components/LogoShowcase';
import HuMaRnSLogo from './components/HuMaRnSLogo';

export default function FuturisticDesignSystem() {
  // Mars Design System Tokens
  const colors = {
    red: {
      primary: '#8B2635',      // Deep Canyon Red
      secondary: '#B22222',    // Crimson Rocks
      tertiary: '#CD5C5C',     // Iron Oxide Surface
      light: '#A0522D',        // Mars Clay
      dark: '#800020',         // Shadow Mars
    },
    orange: {
      primary: '#f97316',      // Mars Surface
      secondary: '#ea580c',    // Sunset Horizon
      tertiary: '#CD853F',     // Dust Cloud
      light: '#F4A460',        // Dune Sand
      accent: '#B87333',       // Copper Structure
      glow: '#FFBF00',         // Golden Hour
    },
    blue: {
      primary: '#2F4F4F',      // Space Teal
      secondary: '#4682B4',    // Tech Blue
      tertiary: '#708090',     // Horizon Mist
      dark: '#191970',         // Cosmos Blue
      accent: '#00CED1',       // Energy Cyan
      light: '#87CEEB',        // Plasma Glow
    },
    neutral: {
      black: '#0F0F0F',        // Deep Space
      gray: '#36454F',         // Colony Steel
    }
  };

  // Shadow Design Tokens
  const shadows = {
    mars: {
      text: {
        primary: `rgba(139, 38, 53, 0.9) 2px 2px 0px, rgba(139, 38, 53, 0.7) 4px 6px 4px`,
        secondary: `rgba(139, 38, 53, 0.8) 1px 1px 0px, rgba(139, 38, 53, 0.6) 2px 3px 2px`,
        subtle: `rgba(139, 38, 53, 0.6) 1px 1px 0px, rgba(139, 38, 53, 0.4) 1px 2px 1px`,
      },
      element: {
        soft: `0 2px 4px rgba(139, 38, 53, 0.3)`,
        medium: `0 4px 8px rgba(139, 38, 53, 0.4)`,
        strong: `0 8px 16px rgba(139, 38, 53, 0.5)`,
        glow: `0 0 20px rgba(139, 38, 53, 0.6)`,
      }
    },
    black: {
      text: {
        primary: `rgba(0, 0, 0, 0.9) 2px 2px 0px, rgba(0, 0, 0, 0.7) 4px 6px 4px`,
        secondary: `rgba(0, 0, 0, 0.8) 1px 1px 0px, rgba(0, 0, 0, 0.6) 2px 3px 2px`,
        subtle: `rgba(0, 0, 0, 0.6) 1px 1px 0px, rgba(0, 0, 0, 0.4) 1px 2px 1px`,
      },
      element: {
        soft: `0 2px 4px rgba(0, 0, 0, 0.3)`,
        medium: `0 4px 8px rgba(0, 0, 0, 0.4)`,
        strong: `0 8px 16px rgba(0, 0, 0, 0.5)`,
        glow: `0 0 20px rgba(0, 0, 0, 0.6)`,
      }
    }
  };

  // Typography Design Tokens - Granular Values
  const typography = {
    fontSize: {
      hero: {
        mobile: '2.25rem',    // 36px
        tablet: '3.75rem',    // 60px  
        desktop: '6rem'       // 96px
      },
      subtitle: {
        mobile: '1.125rem',   // 18px
        tablet: '1.25rem',    // 20px
        desktop: '1.5rem'     // 24px
      },
      heading: {
        h1: '3rem',           // 48px
        h2: '1.875rem',       // 30px
        h3: '1.25rem',        // 20px
        h4: '1.125rem'        // 18px
      },
      body: {
        large: '1.125rem',    // 18px
        medium: '1rem',       // 16px
        small: '0.875rem'     // 14px
      }
    },
    fontWeight: {
      bold: '700',
      semibold: '600', 
      medium: '500',
      normal: '400'
    },
    spacing: {
      hero: {
        mobile: '1.5rem',     // 24px
        tablet: '2rem'        // 32px
      },
      subtitle: {
        mobile: '1rem',       // 16px
        tablet: '1.5rem',     // 24px
        desktop: '2rem'       // 32px
      },
      standard: '1rem'        // 16px
    }
  };

  // Design System Display Data (for documentation)
  const marsColorPalette = [
    // Mars Reds
    { name: 'Red Primary', hex: colors.red.primary, usage: 'Deep red rock formations and cliffs', token: 'red.primary' },
    { name: 'Red Secondary', hex: colors.red.secondary, usage: 'Bold red geological features', token: 'red.secondary' },
    { name: 'Red Tertiary', hex: colors.red.tertiary, usage: 'Rusty Mars terrain', token: 'red.tertiary' },
    { name: 'Red Light', hex: colors.red.light, usage: 'Natural sedimentary layers', token: 'red.light' },
    { name: 'Red Dark', hex: colors.red.dark, usage: 'Deep shadowed canyon areas', token: 'red.dark' },
    
    // Desert Oranges
    { name: 'Orange Primary', hex: colors.orange.primary, usage: 'Primary desert ground color', token: 'orange.primary' },
    { name: 'Orange Secondary', hex: colors.orange.secondary, usage: 'Warm atmospheric glow', token: 'orange.secondary' },
    { name: 'Orange Tertiary', hex: colors.orange.tertiary, usage: 'Swirling atmospheric dust', token: 'orange.tertiary' },
    { name: 'Orange Light', hex: colors.orange.light, usage: 'Light sandy dunes and paths', token: 'orange.light' },
    { name: 'Orange Accent', hex: colors.orange.accent, usage: 'Metallic colony buildings', token: 'orange.accent' },
    { name: 'Orange Glow', hex: colors.orange.glow, usage: 'Warm artificial lighting', token: 'orange.glow' },
    
    // Atmospheric Blues
    { name: 'Blue Primary', hex: colors.blue.primary, usage: 'Deep atmospheric layers', token: 'blue.primary' },
    { name: 'Blue Secondary', hex: colors.blue.secondary, usage: 'Futuristic accent lighting', token: 'blue.secondary' },
    { name: 'Blue Tertiary', hex: colors.blue.tertiary, usage: 'Atmospheric haze and distance', token: 'blue.tertiary' },
    { name: 'Blue Dark', hex: colors.blue.dark, usage: 'Far space darkness', token: 'blue.dark' },
    { name: 'Blue Accent', hex: colors.blue.accent, usage: 'Power systems and UI highlights', token: 'blue.accent' },
    { name: 'Blue Light', hex: colors.blue.light, usage: 'Advanced technology interfaces', token: 'blue.light' },
    
    // Neutrals
    { name: 'Neutral Black', hex: colors.neutral.black, usage: 'Structural shadows and depths', token: 'neutral.black' },
    { name: 'Neutral Gray', hex: colors.neutral.gray, usage: 'Advanced building materials', token: 'neutral.gray' },
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
      <>
         <div className="mars-hero-container">
           <div className="mars-hero-content">
             {/* Hero Header - Responsive Typography */}
             <div className='flex justify-center items-center'>
                <HuMaRnSLogo height={500} width={500} />
             </div>
             <h1 className="mars-hero-text">
                π * sqrt( ((r1 + r2) / 2)^3 / μ )
             </h1>
             
             {/* Subheading - Names */}
             <div className="mars-subtitle-container">
               <div className="mars-subtitle-text">Feynman</div>
               <div className="mars-subtitle-text">Hadfield</div>
               <div className="mars-subtitle-text">Musk</div>
             </div>
           </div>
         </div>
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

            {/* Actionable Items */}
            <section className="bg-gradient-to-r from-red-900/80 to-orange-900/80 rounded-2xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                <h2 className="text-3xl font-semibold text-red-200 mb-6">
                Actionable Items
                </h2>
                
                {/* 1. Basic 100vw vh Mars red bg */}
                <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-200 mb-4">1. Basic Mars Layout</h3>
                <div className="w-full h-[40vh] bg-red-900 rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)] flex items-center justify-center">
                    <div className="text-center">
                    <div className="text-6xl mb-4">🔴</div>
                    <p className="text-red-100 text-lg">100vw × 100vh Mars Red Background</p>
                    <p className="text-red-300 text-sm mt-2">Full viewport Mars-themed foundation</p>
                    </div>
                </div>
                </div>

                {/* 2. Formula from masterclass + names */}
                <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-200 mb-4">2. Masterclass Formula & Experts</h3>
                <div className="bg-red-950/50 rounded-xl p-6 border border-red-500/20">
                    <div className="text-center mb-6">
                    <h4 className="text-lg font-semibold text-red-100 mb-3">Formula from Masterclass</h4>
                    <div className="text-red-200 text-xl font-mono bg-red-900/30 rounded-lg p-4 border border-red-500/30">
                        Learning + Practice + Mentorship = Mastery
                    </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-red-900/40 rounded-lg p-4 border border-red-500/20 text-center">
                        <div className="text-3xl mb-2">🧠</div>
                        <h5 className="text-red-200 font-semibold">Feynman</h5>
                        <p className="text-red-300 text-sm">Physics & Learning</p>
                    </div>
                    <div className="bg-red-900/40 rounded-lg p-4 border border-red-500/20 text-center">
                        <div className="text-3xl mb-2">🚀</div>
                        <h5 className="text-red-200 font-semibold">Hadfield</h5>
                        <p className="text-red-300 text-sm">Astronaut & Leadership</p>
                    </div>
                    <div className="bg-red-900/40 rounded-lg p-4 border border-red-500/20 text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <h5 className="text-red-200 font-semibold">Musk</h5>
                        <p className="text-red-300 text-sm">Innovation & Mars Vision</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* 3. Grid Development */}
                <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-200 mb-4">3. Develop This Grid</h3>
                <div className="bg-red-950/50 rounded-xl p-6 border border-red-500/20">
                    <p className="text-red-100 mb-4">Grid development roadmap:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-200 font-semibold mb-2">Phase 1</h4>
                        <p className="text-red-300 text-sm">Basic responsive grid layout</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-200 font-semibold mb-2">Phase 2</h4>
                        <p className="text-red-300 text-sm">Interactive Mars elements</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-200 font-semibold mb-2">Phase 3</h4>
                        <p className="text-red-300 text-sm">Advanced sci-fi animations</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-200 font-semibold mb-2">Phase 4</h4>
                        <p className="text-red-300 text-sm">Real Mars data integration</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-200 font-semibold mb-2">Phase 5</h4>
                        <p className="text-red-300 text-sm">User interaction features</p>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/20">
                        <h4 className="text-red-200 font-semibold mb-2">Phase 6</h4>
                        <p className="text-red-300 text-sm">Performance optimization</p>
                    </div>
                    </div>
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
                    className="group relative overflow-hidden rounded-md border shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-all duration-300"
                    style={{ 
                        backgroundColor: colors.neutral.black,
                        borderColor: colors.red.tertiary + '50' // 50 for opacity
                    }}
                    >
                    {/* Color Swatch */}
                    <div 
                        className="h-24 w-full"
                        style={{ backgroundColor: color.hex }}
                    />
                    
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                        <span className="font-medium" style={{ color: colors.red.light }}>
                            {color.name}
                        </span>
                        <span className="text-sm font-mono" style={{ color: colors.red.tertiary }}>
                            {color.hex}
                        </span>
                        </div>
                        
                        <div className="mb-2">
                        <span className="text-xs font-mono px-2 py-1 rounded-md" 
                                style={{ 
                                backgroundColor: colors.blue.primary + '20',
                                color: colors.blue.light,
                                border: `1px solid ${colors.blue.primary}50`
                                }}>
                            {color.token}
                        </span>
                        </div>
                        
                        <p className="text-sm leading-relaxed" style={{ color: colors.red.secondary }}>
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
                
                {/* Hero Typography */}
                <div className="mb-12 pb-8 border-b border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-200 mb-6">Hero Typography - Responsive</h4>
                  <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8" style={{ textShadow: shadows.mars.text.primary }}>
                      Hero Heading
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 text-lg md:text-xl lg:text-2xl font-medium">
                      <div style={{ textShadow: shadows.mars.text.secondary }}>Label One</div>
                      <div style={{ textShadow: shadows.mars.text.secondary }}>Label Two</div>
                      <div style={{ textShadow: shadows.mars.text.secondary }}>Label Three</div>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-red-300 text-center">
                    <p><strong>Responsive:</strong> text-4xl (mobile) → md:text-6xl (tablet) → lg:text-8xl (desktop)</p>
                    <p><strong>Shadows:</strong> mars.text.primary (heading), mars.text.secondary (labels)</p>
                  </div>
                </div>

                {/* Standard Typography */}
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
    </>
  );
}
