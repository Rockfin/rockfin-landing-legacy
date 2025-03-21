"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the CustomSpline component with SSR disabled
// This ensures the Spline component only loads on the client side
const CustomSpline = dynamic(() => import('./CustomSpline'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-900/50 backdrop-blur-sm">
      <div className="animate-pulse text-white">Loading 3D scene...</div>
    </div>
  )
});

interface SplineWrapperProps {
  sceneUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SplineWrapper - A unified component for rendering Spline 3D scenes
 * 
 * This component serves as the single entry point for all Spline scenes
 * in the application. It handles dynamic loading and proper client-side
 * rendering of Spline content.
 */
const SplineWrapper: React.FC<SplineWrapperProps> = ({ 
  sceneUrl,
  className = "",
  style = {}
}) => {
  return (
    <div className={className} style={style}>
      <CustomSpline sceneUrl={sceneUrl} />
    </div>
  );
};

export default SplineWrapper;
