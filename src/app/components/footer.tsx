'use client';
import React, { useState } from 'react';
import DonationModal from './donationModal';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="bg-[#00A651] text-white mt-8 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">LEGAL</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-[#A1E6AC] hover:underline">
                Privacidade Biblioteca Comunitária
              </a>
            </li>
            <li>
              <a
                href="https://mostracultural.obrasocialchicoxavier.com.br/assets/templates/subTrabalhos.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1E6AC] hover:underline"
              >
                Eventos da biblioteca
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">ENTRE EM CONTATO:</h3>
          <ul>
            <li className="mb-2">
              Parcerias e doações:{' '}
              <a
                href="mailto:parcerias@bibliotecacomunitaria.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                parcerias@bibliotecacomunitaria.org.br
              </a>
            </li>
            <li className="mb-2">
              Centros de Empoderamento Digital:{' '}
              <a
                href="mailto:contatoceds@bibliotecacomunitaria.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                contatoceds@bibliotecacomunitaria.org.br
              </a>
            </li>
            <li>
              Biblioteca comunitária:{' '}
              <a
                href="mailto:atendimento@comunitaria.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                atendimento@bibliotecacomunitaria.org.br
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Comunicação e Outros:</h3>
          <ul>
            <li className="mb-2">
              Comunicação e imprensa:{' '}
              <a
                href="mailto:comunicacao@comunitaria.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                comunicacao@biblioteca.org.br
              </a>
            </li>
            <li className="mb-2">
              Assuntos institucionais:{' '}
              <a
                href="mailto:contato@biblioteca.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                contato@biblioteca.org.br
              </a>
            </li>
            <li className="mb-2">
              Financeiro:{' '}
              <a
                href="mailto:financeiro@recode.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                financeiro@biblioteca.org.br
              </a>
            </li>
            <li>
              LGPD:{' '}
              <a
                href="mailto:lgpd@recode.org.br"
                className="text-[#A1E6AC] hover:underline"
              >
                lgpd@biblioteca.org.br
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-[#007A40] pt-6">
        <h3 className="font-bold text-lg mb-4 text-center md:text-left">
          Deseja Contribuir com um PIX?
        </h3>
        <p className="text-center md:text-left text-[#A1E6AC] mb-4 font-semibold">
          Aceitamos sua doação! Se você deseja contribuir com as despesas
          mensais e atividades da Biblioteca Comunitária Maria Dolores, segue
          abaixo os dados bancários para transferência.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start text-sm mb-4 space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left text-base">
            <p>Favorecido: Centro Espírita Maria Dolores</p>
            <p>Tipo de Chave: CNPJ</p>
            <p>Chave PIX: 63.659.213/0001-40</p>
            <p>Instituição: Sicoob Amazônia</p>
          </div>
          <div>
            <img
              src="/assets/qrCode.jpeg"
              alt="QR Code para doação PIX"
              className="w-32 h-32 object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <button
            onClick={handleButtonClick}
            className="bg-[#00A651] hover:bg-[#007A40] text-white font-bold py-2 px-4 rounded mt-4"
          >
            Fazer uma Doação Agora
          </button>
        </div>
        <DonationModal showModal={showModal} onClose={handleCloseModal} />

        <div className="text-center md:text-left mt-6">
          <h3 className="font-bold mb-2">Endereço:</h3>
          <p>
            <a
              href="https://goo.gl/maps/t4yDenK7SBRo2d5P9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1E6AC] hover:underline"
            >
              R. Padre Calebe, 3725 - Mamoud Amed, Itacoatiara, Amazonas -
              Brasil
            </a>
          </p>
          <p>CEP: 69100-000</p>
        </div>
        <p className="text-sm text-center mt-6 text-gray-300">
          &copy; 2024 Biblioteca Comunitária Maria Dolores
        </p>

        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="https://www.facebook.com/p/Biblioteca-Comunit%C3%A1ria-Maria-Dolores-100078250148289/"
            className="hover:text-[#A1E6AC]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/bibliotecacomunitariamd/"
            className="hover:text-[#A1E6AC]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
