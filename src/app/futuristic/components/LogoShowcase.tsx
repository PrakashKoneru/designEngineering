import React from 'react';
import HuMaRnSLogo from './HuMaRnSLogo';
import '../mars-design-system.css';

export const MarsLogoShowcase: React.FC = () => {
  return (
    <div className="mars-logo-showcase">
      <div className="mars-showcase-grid">
        
        {/* Default Version */}
        <div className="mars-showcase-item">
          <h3 className="mars-showcase-title">Default</h3>
          <HuMaRnSLogo />
        </div>

        {/* Primary Mars Theme */}
        <div className="mars-showcase-item mars-primary">
          <h3 className="mars-showcase-title">Primary</h3>
          <HuMaRnSLogo 
            variant="primary"
            strokeWidth={1.2}
          />
        </div>

        {/* Secondary Mars Theme */}
        <div className="mars-showcase-item mars-secondary">
          <h3 className="mars-showcase-title">Secondary</h3>
          <HuMaRnSLogo 
            variant="secondary"
            strokeWidth={0.8}
          />
        </div>

        {/* Accent Version */}
        <div className="mars-showcase-item mars-accent">
          <h3 className="mars-showcase-title">Accent Red</h3>
          <HuMaRnSLogo 
            variant="accent"
            strokeWidth={1.0}
          />
        </div>

        {/* Small Mission Badge */}
        <div className="mars-showcase-item mars-mission">
          <h3 className="mars-showcase-title">Mission Badge</h3>
          <HuMaRnSLogo 
            width={120} 
            height={96}
            variant="primary"
            strokeWidth={1.5}
          />
        </div>

        {/* Static Command Center */}
        <div className="mars-showcase-item mars-command">
          <h3 className="mars-showcase-title">Command Center</h3>
          <HuMaRnSLogo 
            animated={false}
            variant="accent"
            strokeWidth={0.5}
            width={180}
            height={144}
          />
        </div>

      </div>
    </div>
  );
};

export default MarsLogoShowcase;
