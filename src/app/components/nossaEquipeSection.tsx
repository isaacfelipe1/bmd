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
          Somos um grupo de diferentes profissionais com o mesmo objetivo:
          transformar a sociedade por meio da educação. Dia após dia, passamos o
          nosso melhor para as crianças que enxergam na Escola Professora
          Olindina um futuro com diversas portas abertas.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Mais do que bons alunos, queremos formar bons cidadãos, fazendo com
          que cada um possa escolher seu caminho e realizar os seus sonhos.
        </p>
      </div>
    </section>
  );
};

export default NossaEquipeSection;
