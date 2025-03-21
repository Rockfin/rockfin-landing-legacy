"use client";

import React from 'react';
import { Application } from '@splinetool/runtime';

interface CustomSplineProps {
  sceneUrl: string;
}

/**
 * CustomSpline - Core component for rendering Spline 3D scenes
 * 
 * This component directly interfaces with the @splinetool/runtime to render
 * Spline scenes on a canvas element. It handles the lifecycle of the Spline
 * application, including loading the scene and cleanup.
 * 
 * Note: This component should not be used directly. Use SplineWrapper instead.
 */
const CustomSpline: React.FC<CustomSplineProps> = ({ sceneUrl }) => {
  // Create a ref to the canvas element
  const ref = React.useRef<HTMLCanvasElement>(null);
  
  // Set up and clean up the Spline application
  React.useEffect(() => {
    // Skip if the canvas ref is not available
    if (!ref.current) return;
    
    // Track the Spline application instance for cleanup
    let spline: Application | null = null;
    
    // Function to load the Spline scene
    const loadSpline = async () => {
      const canvas = ref.current;
      if (!canvas) return;
      
      // Create a new Spline application with the canvas
      spline = new Application(canvas);
      
      try {
        // Load the Spline scene
        await spline.load(sceneUrl);
      } catch (error) {
        console.error('Error loading Spline scene:', error);
      }
    };
    
    // Load the Spline scene
    loadSpline();
    
    // Clean up the Spline application when the component unmounts
    // or when the sceneUrl changes
    return () => {
      if (spline) {
        spline.dispose();
      }
    };
  }, [sceneUrl]);
  
  // Render a canvas element for the Spline scene
  return (
    <canvas 
      ref={ref} 
      style={{ width: '100%', height: '100%' }} 
      aria-label="3D interactive scene"
    />
  );
};

export default CustomSpline;
