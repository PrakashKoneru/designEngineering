export default function NeumorphismDesignSystem() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Neumorphism Design System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soft shadows, subtle depth, and tactile design elements
          </p>
        </header>

        <div className="grid gap-8">
          {/* Product Overview */}
          <section className="bg-white rounded-2xl p-8 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_8px_rgba(255,255,255,0.8)]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Product: SoftTech
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A collection of soft, tactile interfaces designed with neumorphic principles for modern applications.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Ideas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Smart Home Dashboard</li>
                  <li>• Music Production App</li>
                  <li>• Creative Design Tool</li>
                  <li>• Wellness Tracker</li>
                  <li>• Recipe Manager</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Design Principles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Subtle, soft shadows</li>
                  <li>• Muted, neutral tones</li>
                  <li>• 3D-like tactile elements</li>
                  <li>• Card-based layouts</li>
                  <li>• Directional lighting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design System Sections */}
          <section className="bg-white rounded-2xl p-8 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_8px_rgba(255,255,255,0.8)]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Design System Components
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Shadows</h3>
                <p className="text-gray-600">Soft, directional lighting effects</p>
              </div>
              <div className="text-center p-6 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Color Palette</h3>
                <p className="text-gray-600">Muted grays, beiges, soft whites</p>
              </div>
              <div className="text-center p-6 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Components</h3>
                <p className="text-gray-600">Tactile buttons, cards, and inputs</p>
              </div>
            </div>
          </section>

          {/* Status */}
          <section className="bg-gray-200 rounded-2xl p-8 text-center shadow-[inset_2px_2px_8px_rgba(0,0,0,0.1),inset_-2px_-2px_8px_rgba(255,255,255,0.8)]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚧 Coming Soon
            </h2>
            <p className="text-gray-600">
              This design system is in development. Components and detailed specifications will be added incrementally.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
