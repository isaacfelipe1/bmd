'use client';
import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

const Contato = () => {
  const contactInfo = {
    address: 'R. Padre Calebe, 3725 - Mamoud Amed, Itacoatiara, Amazonas - Brasil\nCEP: 69100-000',
    phone: '(92) 98488-2959',
    email: 'biblioteca.com.br',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.503473194025!2d-58.43825248520773!3d-3.136573997732735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x928b5b5a5bfdbf71%3A0x4b37b4e4c1a44116!2sR.%20Padre%20Calebe%2C%203725%20-%20Mamoud%20Amed%2C%20Itacoatiara%20-%20AM%2C%2069100-000!5e0!3m2!1sen!2sbr!4v1696949676859!5m2!1sen!2sbr', // Link atualizado para o endereço exato
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Header
        title="Contato"
        description="Estamos à disposição para atender você!"
        className="relative w-full h-[400px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contact-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </Header>
      <div className="flex-grow w-full py-8 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">Endereço</h2>
            <p className="text-lg text-gray-800 whitespace-pre-line">{contactInfo.address}</p>

            <h2 className="text-3xl font-bold text-green-600 mt-8 mb-4">Telefone</h2>
            <p className="text-lg text-gray-800">{contactInfo.phone}</p>

            <h2 className="text-3xl font-bold text-green-600 mt-8 mb-4">E-mail</h2>
            <p className="text-lg text-gray-800">{contactInfo.email}</p>
          </div>

          <div>
            <iframe
              src={contactInfo.mapSrc}
              width="100%"
              height="300"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
