"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Atividades = () => {
  const atividades = [
    {
      titulo: 'Cronograma das atividades - 2022/2',
      lista: [
        'Oficina de Alfabetização e letramento',
        'Círculos de leitura',
        'Cine-Biblioteca',
        'Curso Básico de Inglês',
        'Oficina de desenho e pintura',
        'Oficina de música e violão',
        'Oficina de Flauta',
        'Curso de Gestão e Sabor',
        'Programação para crianças',
        'Curso de Corte de Cabelo Feminino',
        'Empréstimo de livros – Segunda à Sábado',
      ],
    },
    {
      titulo: 'Cronograma das atividades - 2022/1',
      lista: [
        'Oficina de contação de histórias',
        'Rodas de leituras e contação de histórias',
        'Oficina de música e rodas musicais',
        'Concurso de poesia e desenho',
        'Orientações para os inscritos do concurso com um poeta e um artista plástico.',
        'Realização de uma mostra cultural com contação de histórias, apresentações musicais, concurso de poesia e desenho, como uma culminância do projeto, no mês de encerramento.',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-8 px-4 lg:px-20">
      <h2 className="text-3xl font-bold text-green-600 mb-8">Atividades</h2>
      {atividades.map((atividade, index: number) => (
        <div key={index} className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {atividade.titulo}
            </h3>
            {activeIndex === index ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          {activeIndex === index && (
            <div className="mt-4">
              <ul>
                {atividade.lista.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Atividades;