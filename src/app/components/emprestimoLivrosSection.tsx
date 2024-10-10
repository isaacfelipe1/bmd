'use client';
import React from 'react';

const EmprestimoLivrosSection = () => {
  const galleryPhotos = [
    { url: '/assets/livros01.jpg', alt: 'Foto de livros' },
    { url: '/assets/livros02.jpg', alt: 'Prateleira de livros diversos' },
    { url: '/assets/livros03.jpg', alt: 'Livros em destaque' },
    { url: '/assets/livros04.jpg', alt: 'Leitura infantil' },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        SERVIÇO DE EMPRÉSTIMO DE LIVROS DISPONÍVEL
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Venha nos visitar e aproveite para conhecer nosso acervo literário.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Empréstimo de livros – segunda à sábado. <br />
        Horário: 08h às 12h | 14h às 17h
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {galleryPhotos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={photo.url}
              alt={photo.alt}
              className="object-cover w-full h-48"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmprestimoLivrosSection;
