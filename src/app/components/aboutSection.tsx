import React from 'react';

type AboutSectionProps = {
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutTitle,
  aboutDescription1,
  aboutDescription2,
}) => {
  return (
    <section className="relative py-12" style={{ marginTop: '50px' }}>
      <div className="container mx-auto px-4 lg:px-8 lg:max-w-4xl shadow-lg rounded-lg backdrop-blur-md bg-transparent">
        <h3 className="text-[#005226] text-sm uppercase font-bold tracking-wide mb-4">
          SOBRE a biblioetca
        </h3>
        <h2 className="text-[#005226] text-3xl lg:text-4xl font-bold mb-6">
          {aboutTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          {aboutDescription1}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {aboutDescription2}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
