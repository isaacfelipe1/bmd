'use client';
import React from 'react';
import Image from 'next/image';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import NossaEquipeSection from '../../components/nossaEquipeSection'; 

const NossoTime = () => {
  const content = {
    title: 'Nosso Time',
    description: 'Conheça os membros da nossa equipe.',
  };

  const teamDescription = {
    heading: 'Voluntários e bolsistas', 
    subheading: 'Biblioteca comunitária Maria Dolores Chico Xavier',
  };

  const teamMembers = [
    {
      name: 'Eveli Rayane da Silva Ramos',
      role: 'Diretora',
      imageUrl: 'https://picsum.photos/400?random=1',
    },
    {
      name: 'Kainny',
      role: 'Coordenadora',
      imageUrl: 'https://picsum.photos/400?random=2',
    },
    {
      name: 'Dani',
      role: 'Educadora',
      imageUrl: 'https://picsum.photos/400?random=3', 
    },
    {
      name: 'Cícero',
      role: 'Monitor',
      imageUrl: 'https://picsum.photos/400?random=4', 
    },
    {
      name: 'Ana Clara',
      role: 'Secretária',
      imageUrl: 'https://picsum.photos/400?random=5', 
    },
    {
      name: 'Bruno Ferreira',
      role: 'Instrutor',
      imageUrl: 'https://picsum.photos/400?random=6',
    },
    {
      name: 'Fernanda Souza',
      role: 'Gestora de Projetos',
      imageUrl: 'https://picsum.photos/400?random=7', 
    },
    {
      name: 'Lucas Oliveira',
      role: 'Desenvolvedor',
      imageUrl: 'https://picsum.photos/400?random=8', 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header
        title={content.title}
        description={content.description}
        className="relative w-full h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/fundo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </Header>
      <NossaEquipeSection />
      
      <div className="flex-grow w-full pt-8 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">{teamDescription.heading}</h2>
          <p className="text-xl text-green-700">{teamDescription.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center bg-white p-4 shadow-lg rounded-lg transition-all duration-500 ease-in-out hover:bg-gray-100"
            >
              <div className="w-40 h-40 overflow-hidden transition-all duration-500 ease-in-out group-hover:rounded-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NossoTime;
