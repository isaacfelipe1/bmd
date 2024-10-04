import React from 'react';

type AboutSectionProps = {
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  imageUrl: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutTitle,
  aboutDescription1,
  aboutDescription2,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-10">
      <div className="w-full md:w-1/2">
        <img
          src={imageUrl}
          alt={aboutTitle}
          className="w-full h-auto max-h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl font-bold text-green-700 mb-4">{aboutTitle}</h3>
        <p className="text-lg mb-4">{aboutDescription1}</p>
        <p className="text-lg">{aboutDescription2}</p>
      </div>
    </div>
  );
};

export default AboutSection;
