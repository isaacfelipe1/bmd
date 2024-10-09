'use client';
import Image from 'next/image';
import React from 'react';

const NossaEquipeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between p-8">
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
        <Image
          src="/assets/foto01.jpg" 
          alt="Equipe Escola Olindina"
          width={500} 
          height={400} 
          className="object-contain"
        />
      </div>
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">Nossa Equipe</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus earum illum autem rem aliquam doloribus dolorem ut ab sunt maxime. Dignissimos labore nesciunt consequuntur beatae delectus nisi ipsa sapiente quam!
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi incidunt laboriosam maiores perspiciatis, molestias nesciunt tenetur, adipisci magni numquam ab deserunt? Neque consequuntur est repellendus cupiditate placeat? Totam, distinctio perspiciatis.
        </p>
      </div>
    </section>
  );
};

export default NossaEquipeSection;
