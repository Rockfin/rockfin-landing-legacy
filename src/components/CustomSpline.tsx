"use client";

import React from 'react';
import { Application } from '@splinetool/runtime';

interface CustomSplineProps {
  sceneUrl: string;
}

const CustomSpline: React.FC<CustomSplineProps> = ({ sceneUrl }) => {
  const ref = React.useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    if (!ref.current) return;
    
    let spline: Application | null = null;
    const loadSpline = async () => {
      const canvas = ref.current;
      if (!canvas) return;
      
      spline = new Application(canvas);
      await spline.load(sceneUrl);
    };
    
    loadSpline();
    
    return () => {
      if (spline) {
        spline.dispose();
      }
    };
  }, [sceneUrl]);
  
  return (
    <canvas ref={ref} style={{ width: '100%', height: '100%' }} />
  );
};

export default CustomSpline;
