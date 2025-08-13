import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-light text-slate-800 mb-6 tracking-wide">
          Design Learnings
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Exploring design engineering principles and creating refined design systems.
        </p>
        
        <div className="space-y-4">
          <a 
            href="/designSystem"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-light tracking-wide rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            View Design System
          </a>
          
          <p className="text-sm text-slate-500">
            Your refined design system is ready at /designSystem
          </p>
        </div>
      </div>
    </div>
  );
}
