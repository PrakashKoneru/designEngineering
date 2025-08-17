export default function FinanceDesignSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Finance Design System
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Professional, secure, and data-focused design for financial applications
          </p>
        </header>

        <div className="grid gap-8">
          {/* Product Overview */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Product: SecureVault
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              A comprehensive financial management platform designed with security and professionalism in mind.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-200 mb-3">Product Options</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Personal Finance Dashboard</li>
                  <li>• Investment Portfolio Manager</li>
                  <li>• Business Banking Interface</li>
                  <li>• Cryptocurrency Exchange</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-200 mb-3">Design Principles</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Deep blues, grays, accent golds</li>
                  <li>• Professional typography</li>
                  <li>• Data visualization focus</li>
                  <li>• Security-first aesthetics</li>
                  <li>• Information density</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design System Sections */}
          <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-semibold text-white mb-6">
              Design System Components
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-900/50 rounded-xl border border-blue-700/50">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">Typography</h3>
                <p className="text-blue-100">Monospace for numbers, clean sans-serif for text</p>
              </div>
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-600/50">
                <h3 className="text-xl font-semibold text-slate-200 mb-2">Color Palette</h3>
                <p className="text-slate-100">Professional blues, grays, and accent golds</p>
              </div>
              <div className="text-center p-6 bg-blue-900/50 rounded-xl border border-blue-700/50">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">Data Components</h3>
                <p className="text-blue-100">Charts, tables, and financial widgets</p>
              </div>
            </div>
          </section>

          {/* Status */}
          <section className="bg-blue-900/50 rounded-2xl p-8 text-center border border-blue-700/50">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🚧 Coming Soon
            </h2>
            <p className="text-blue-200">
              This design system is in development. Components and detailed specifications will be added incrementally.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
