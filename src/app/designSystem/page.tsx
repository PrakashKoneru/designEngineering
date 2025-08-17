export default function DesignSystemIndex() {
  const designSystems = [
    {
      id: 1,
      name: "Refined Minimalist",
      description: "Clean, purposeful design with thin strokes and elegant simplicity",
      route: "/designSystem1",
      features: ["Minimalist", "Precise", "Elegant"],
      status: "Complete"
    },
    {
      id: 2,
      name: "Healthcare Trust",
      description: "Refined minimalist design applied to healthcare - trustworthy, accessible, and clean",
      route: "/healthcare",
      features: ["Trustworthy", "Accessible", "Refined"],
      status: "Complete"
    },
    {
      id: 3,
      name: "Finance Professional",
      description: "Professional, secure, and data-focused design for financial applications",
      route: "/finance",
      features: ["Professional", "Secure", "Data-focused"],
      status: "In Development"
    },
    {
      id: 4,
      name: "Neumorphism Soft",
      description: "Soft shadows, subtle depth, and tactile design elements",
      route: "/neumorphism",
      features: ["Soft", "Tactile", "3D"],
      status: "In Development"
    },
    {
      id: 5,
      name: "Glassmorphism Crystal",
      description: "Transparency, blur effects, and modern glass-like interfaces",
      route: "/glassmorphism",
      features: ["Transparent", "Modern", "Glass-like"],
      status: "In Development"
    },
    {
      id: 6,
      name: "Futuristic Mars",
      description: "Sci-fi inspired, glowing elements, and advanced technology aesthetics inspired by Mars exploration",
      route: "/futuristic",
      features: ["Sci-fi", "Glowing", "Advanced"],
      status: "Complete"
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-20">
          <h1 className="text-6xl font-bold text-black mb-6">
            Design Systems Playground
          </h1>
          <p className="text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
            A collection of diverse design systems showcasing different approaches, 
            styles, and solutions for various industries and use cases.
          </p>
        </header>

        {/* Design Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {designSystems.map((system) => (
            <a
              key={system.id}
              href={system.route}
              className="group block"
            >
              <div className="bg-black rounded-2xl p-8 h-full transition-all duration-25 ease-out group-hover:scale-105 group-hover:shadow-[0_50px_100px_-20px_rgba(255,255,255,0.15)] group-hover:-translate-y-2 border border-white/10 hover:border-white/20 shadow-lg">
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {system.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {system.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {system.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/90"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    system.status === "Complete" 
                      ? "bg-white text-black" 
                      : "bg-gray-800 text-white border border-white/30"
                  }`}>
                    {system.status === "Complete" ? "Complete" : "In Development"}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Playground Philosophy */}
        <section className="bg-black rounded-3xl p-12 shadow-2xl border border-white/10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Playground Philosophy
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Each design system represents a unique approach to solving design challenges. 
              From minimalist elegance to futuristic innovation, these systems demonstrate 
              the versatility and depth of design thinking.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/20 shadow-md">
                  <span className="text-2xl text-white font-bold">P</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Purpose-Driven</h3>
                <p className="text-gray-300">Each system solves specific problems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/20 shadow-md">
                  <span className="text-2xl text-white font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Iterative</h3>
                <p className="text-gray-300">Continuous improvement and refinement</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center border border-white/20 shadow-md">
                  <span className="text-2xl text-white font-bold">D</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Diverse</h3>
                <p className="text-gray-300">Multiple styles and approaches</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
