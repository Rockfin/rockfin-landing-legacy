import React from 'react';

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl mb-4">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learn more about Rockfin LLC, our mission, vision, and the team driving innovation.
          {/* Placeholder for actual About Us content */}
        </p>
        {/* Example: Add team photos, mission statement, etc. here */}
      </div>
    </section>
  );
}

export default AboutUsSection;