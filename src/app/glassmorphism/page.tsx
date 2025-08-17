export default function GlassmorphismDesignSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Glassmorphism Design System
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transparency, blur effects, and modern glass-like interfaces
          </p>
        </header>

        <div className="grid gap-8">
          {/* Product Overview */}
          <section className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Product: CrystalUI
            </h2>
            <p className="text-lg text-white/90 mb-6">
              A collection of beautiful, transparent interfaces designed with modern glassmorphic principles.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">Product Ideas</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Weather App</li>
                  <li>• Social Media Dashboard</li>
                  <li>• Creative Portfolio</li>
                  <li>• Travel Planner</li>
                  <li>• Event Management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">Design Principles</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Subtle transparency</li>
                  <li>• Backdrop blur effects</li>
                  <li>• Light, airy aesthetics</li>
                  <li>• Floating card layouts</li>
                  <li>• Subtle borders</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design System Sections */}
          <section className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Design System Components
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40">
                <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                <p className="text-white/80">Subtle blur and see-through effects</p>
              </div>
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40">
                <h3 className="text-xl font-semibold text-white mb-2">Color Palette</h3>
                <p className="text-white/80">Light, airy with accent colors</p>
              </div>
              <div className="text-center p-6 bg-white/30 backdrop-blur-sm rounded-xl border border-white/40">
                <h3 className="text-xl font-semibold text-white mb-2">Effects</h3>
                <p className="text-white/80">Backdrop blur, subtle borders</p>
              </div>
            </div>
          </section>

          {/* Status */}
          <section className="bg-white/30 backdrop-blur-md rounded-2xl p-8 text-center border border-white/40 shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🚧 Coming Soon
            </h2>
            <p className="text-white/90">
              This design system is in development. Components and detailed specifications will be added incrementally.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
