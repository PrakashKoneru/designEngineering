import React from 'react';
import '../mars-design-system.css';

interface HuMaRnSLogoProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  animated?: boolean;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
}

export const HuMaRnSLogo: React.FC<HuMaRnSLogoProps> = ({
  width = 250,
  height = 200,
  strokeColor,
  strokeWidth = 0.65,
  className = "",
  animated = true,
  variant = 'default'
}) => {
  // Use Mars design system color tokens based on variant
  const getStrokeColor = () => {
    if (strokeColor) return strokeColor;
    
    switch (variant) {
      case 'primary':
        return 'var(--mars-orange-primary)';
      case 'secondary':
        return 'var(--mars-orange-secondary)';
      case 'accent':
        return 'var(--mars-red-primary)';
      default:
        return 'currentColor';
    }
  };

  const finalStrokeColor = getStrokeColor();

  return (
    <svg 
      width={width} 
      height={height} 
      xmlns="http://www.w3.org/2000/svg"
      className={`mars-logo ${className}`}
      viewBox="0 0 250 200"
    >
      {/* Top orbit circle */}
      <ellipse 
        cx="125" 
        cy="60" 
        rx="48" 
        ry="50"
        fill="none" 
        stroke={finalStrokeColor} 
        strokeWidth={strokeWidth}
        className="mars-orbit-top"
      >
        {animated && (
          <animate 
            attributeName="cy"
            values="60;50;60"
            dur="6s"
            repeatCount="indefinite"
          />
        )}
      </ellipse>
      
      {/* Middle orbit circle */}
      <ellipse 
        cx="130" 
        cy="100" 
        rx="50" 
        ry="47"
        fill="none" 
        stroke={finalStrokeColor} 
        strokeWidth={strokeWidth}
        className="mars-orbit-middle"
      >
        {animated && (
          <animate 
            attributeName="cy"
            values="100;90;100"
            dur="8s"
            repeatCount="indefinite"
          />
        )}
      </ellipse>
      
      {/* Bottom orbit circle */}
      <ellipse 
        cx="120" 
        cy="140" 
        rx="49" 
        ry="51"
        fill="none" 
        stroke={finalStrokeColor} 
        strokeWidth={strokeWidth}
        className="mars-orbit-bottom"
      >
        {animated && (
          <animate 
            attributeName="cy"
            values="140;120;140"
            dur="10s"
            repeatCount="indefinite"
          />
        )}
      </ellipse>

      {/* Mars center dot */}
      <circle 
        cx="125" 
        cy="100" 
        r="3"
        fill={finalStrokeColor}
        opacity="0.8"
        className="mars-center"
      >
        {animated && (
          <animate 
            attributeName="opacity"
            values="0.8;0.4;0.8"
            dur="4s"
            repeatCount="indefinite"
          />
        )}
      </circle>

      {/* Orbital paths (subtle guides) */}
      <ellipse 
        cx="125" 
        cy="100" 
        rx="60" 
        ry="65"
        fill="none" 
        stroke={finalStrokeColor} 
        strokeWidth={strokeWidth * 0.3}
        opacity="0.3"
        strokeDasharray="2,4"
        className="mars-orbit-guide-inner"
      />
      
      <ellipse 
        cx="125" 
        cy="100" 
        rx="75" 
        ry="80"
        fill="none" 
        stroke={finalStrokeColor} 
        strokeWidth={strokeWidth * 0.2}
        opacity="0.2"
        strokeDasharray="1,6"
        className="mars-orbit-guide-outer"
      />

      {/* Mission trajectory lines */}
      <path
        d="M 50 180 Q 125 50 200 180"
        fill="none"
        stroke={finalStrokeColor}
        strokeWidth={strokeWidth * 0.4}
        opacity="0.4"
        strokeDasharray="3,3"
        className="mars-trajectory"
      >
        {animated && (
          <animate 
            attributeName="opacity"
            values="0.4;0.1;0.4"
            dur="12s"
            repeatCount="indefinite"
          />
        )}
      </path>
    </svg>
  );
};

export default HuMaRnSLogo;
