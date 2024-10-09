'use client';
import React, { useState } from 'react';
import DonationModal from './donationModal';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image'; 

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="bg-[#00A651] text-white mt-8 py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="font-bold text-xl mb-4 text-center md:text-left">
          Deseja Contribuir com um PIX?
        </h3>
        <p className="text-center md:text-left text-[#A1E6AC] mb-4 font-medium text-base">
          Aceitamos sua doação! Se você deseja contribuir com as despesas mensais
          e atividades da Biblioteca Comunitária Maria Dolores, segue abaixo os
          dados bancários para transferência.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="text-center md:text-left text-sm space-y-1">
            <p>Favorecido: Centro Espírita Maria Dolores</p>
            <p>Tipo de Chave: CNPJ</p>
            <p>Chave PIX: 63.659.213/0001-40</p>
            <p>Instituição: Sicoob Amazônia</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Image
              src="/assets/qrCode.jpeg"
              alt="QR Code para doação PIX"
              width={112} 
              height={112} 
              className="rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <button
            onClick={handleButtonClick}
            className="bg-[#00A651] hover:bg-[#007A40] text-white font-bold py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            Fazer uma Doação Agora
          </button>
        </div>
        <DonationModal showModal={showModal} onClose={handleCloseModal} />

        <div className="text-center md:text-left mt-8">
          <h3 className="font-bold mb-2 text-lg">Endereço:</h3>
          <p className="text-sm">
            <a
              href="https://goo.gl/maps/t4yDenK7SBRo2d5P9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1E6AC] hover:underline"
            >
              R. Padre Calebe, 3725 - Mamoud Amed, Itacoatiara, Amazonas - Brasil
            </a>
          </p>
          <p className="text-sm">CEP: 69100-000</p>
        </div>
        <p className="text-xs text-center mt-6 text-gray-300">
          &copy; 2024 Biblioteca Comunitária Maria Dolores
        </p>

        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.facebook.com/p/Biblioteca-Comunit%C3%A1ria-Maria-Dolores-100078250148289/"
            className="hover:text-[#A1E6AC] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/bibliotecacomunitariamd/"
            className="hover:text-[#A1E6AC] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
