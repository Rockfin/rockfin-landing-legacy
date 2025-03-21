"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the CustomSpline component with SSR disabled
const CustomSpline = dynamic(() => import('./CustomSpline'), {
  ssr: false,
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>
});

interface SplineWrapperProps {
  sceneUrl: string;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ sceneUrl }) => {
  return <CustomSpline sceneUrl={sceneUrl} />;
};

export default SplineWrapper;
