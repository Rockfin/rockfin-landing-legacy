import React from 'react';
import Navbar from '@/components/Navbar'; // Import Navbar
import { GovernmentContractingSection } from '@/components/GovernmentContractingSection'; // Import the section
const GovernmentContractingPage = () => {
  return (
    <> {/* Wrap in Fragment */}
      <Navbar />
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Government Contracting</h1>
        <p className="text-lg text-center">
          Detailed information about Rockfin&apos;s government contracting services will go here.
        </p>
        {/* Add more content specific to government contracting */}
        
        {/* Add the Government Contracting Section component */}
        <GovernmentContractingSection />
        
      </div>
    </div>
    </> // Close Fragment
  );
};

export default GovernmentContractingPage;