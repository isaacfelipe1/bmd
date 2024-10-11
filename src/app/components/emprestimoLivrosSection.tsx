'use client';
import React from 'react';

const EmprestimoLivrosSection = () => {
  const galleryPhotos = [
    { url: '/assets/livros01.jpg', alt: 'Foto de livros', caption: 'Livros variados para todos os gostos' },
    { url: '/assets/livros02.jpg', alt: 'Prateleira de livros diversos', caption: 'Organização impecável do acervo' },
    { url: '/assets/livros03.jpg', alt: 'Livros em destaque', caption: 'Títulos mais populares do momento' },
    { url: '/assets/livros04.jpg', alt: 'Leitura infantil', caption: 'Sessão dedicada à leitura infantil' },
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        SERVIÇO DE EMPRÉSTIMO DE LIVROS DISPONÍVEL
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        Venha nos visitar e aproveite para conhecer nosso acervo literário.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Empréstimo de livros – segunda à sábado. <br />
        Horário: 08h às 12h | 14h às 17h
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {galleryPhotos.map((photo, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="object-cover w-full h-48 transition-all duration-300"
            />
            <p className="text-center mt-2 text-gray-600 text-sm">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmprestimoLivrosSection;
