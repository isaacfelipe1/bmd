
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
    <section
      className="relative py-12 lg:py-16 bg-transparent"
      style={{ marginTop: '50px' }}
      aria-label="Sobre a Biblioteca"
    >
      <div
        className="container mx-auto px-4 lg:px-8 lg:max-w-4xl shadow-lg rounded-lg backdrop-blur-md bg-white transition-all duration-500 ease-in-out"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3
          className="text-[#005226] text-sm uppercase font-bold tracking-wide mb-4"
          aria-label="Sobre a biblioteca"
        >
          SOBRE A BIBLIOTECA
        </h3>
        <h2
          className="text-[#005226] text-3xl lg:text-4xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {aboutTitle}
        </h2>
        <p
          className="text-lg text-gray-800 mb-4 leading-relaxed lg:leading-loose"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {aboutDescription1}
        </p>
        <p
          className="text-lg text-gray-800 leading-relaxed lg:leading-loose"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {aboutDescription2}
        </p>
        <div className="mt-6">
          <a
            href="../pages/como-comecou"
            className="bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            aria-label="Saiba mais sobre a biblioteca"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Conheça como tudo começou
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
