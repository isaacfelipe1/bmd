import React from 'react';
import Image from 'next/image';

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
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-green-700 text-sm uppercase font-bold tracking-wide mb-4">
          O PROJETO
        </h3>
        <h2 className="text-orange-600 text-4xl font-bold mb-6">
          {aboutTitle}
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          {aboutDescription1}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {aboutDescription2}
        </p>
       
        <div className="mt-6">
          <Image
            src={imageUrl} 
            alt="About Section Image"
            width={600} 
            height={400} 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
