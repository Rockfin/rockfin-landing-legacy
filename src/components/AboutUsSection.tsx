import React from 'react';

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl mb-4">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Rockfin comprises a dedicated team of engineers with distinguished backgrounds in the military and intelligence sectors. Our core mission is to strategically leverage cutting-edge advancements in Artificial Intelligence and Blockchain technology. We are committed to ensuring these powerful innovations are ethically deployed to foster positive global impact and contribute to the betterment of humanity.
        </p>
        {/* Example: Add team photos, mission statement, etc. here */}
      </div>
    </section>
  );
}

export default AboutUsSection;