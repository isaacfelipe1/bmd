'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Supporter {
  logoUrl: string;
  alt: string;
  name: string;
}

interface SupportersSectionProps {
  supporters: Supporter[];
}

const SupportersSection = ({ supporters }: SupportersSectionProps) => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000,
    arrows: true, 
    responsive: [
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-bold text-green-700 mb-8">
        NOSSOS PARCEIROS
      </h2>
      <div className="container mx-auto overflow-hidden">
        <Slider {...settings}>
          {supporters.map((supporter, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-32 h-32"> 
                <Image
                  src={supporter.logoUrl}
                  alt={supporter.alt}
                  width={128} 
                  height={128} 
                  className="object-contain w-full h-full" 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SupportersSection;
