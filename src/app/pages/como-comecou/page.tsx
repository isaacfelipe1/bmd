'use client';
import React from 'react';
import Image from 'next/image';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

const ComoTudoComecou = () => {
  const content = {
    title: 'Cultura e Humanização',
    description:
      'Por Elisângela Oliveira, pedagoga - mãe de cinco filhos, natural de Itacoatiara (AM), e professora adjunta da UEA no curso de Licenciatura em Computação do Centro de Estudos Superiores de Itacoatiara (CESIT).',
  };

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
      <div className="flex-grow w-full pt-8 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/assets/autora1.png"
              alt="Elisângela Oliveira"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="text-lg leading-relaxed text-gray-800">
          <p className="mb-6">
            Tudo começou com o Projeto de extensão em rede nos Cursos de Letras
            UEA de Presidente Figueiredo, Coordenado pela Profa. Mestre Fátima
            Souza e por mim, Elisângela Oliveira, em Itacoatiara (modular - 
            NESPF/ PARFOR - CESIT). O Projeto constituiu-se de dois eixos: 
            Formação: visando a formar mediadores de leitura; e o Eixo Ação: 
            voltado ao mapeamento de espaços de leitura evidenciando 3 
            bibliotecas com mais de 5 anos de existência, o que gerou visitas 
            técnicas e boletins disponíveis no site e a constatação: ausência de 
            incidência política das bibliotecas do Amazonas e de participação na 
            Rede Nacional de Bibliotecas Comunitárias (RNBC).
          </p>
          <p className="mb-6">
            A partir deste projeto eu comecei a participar das formações da Rede 
            Nacional de Bibliotecas e dos encontros quinzenais do Projeto de 
            Extensão Práticas Leitoras-Ano 2, voltado para a formação de mediadores 
            culturais, que proporcionou o mapeamento e o engajamento em Rede das 
            Bibliotecas comunitárias, que se expande para outras cidades do Amazonas 
            como Presidente Figueiredo e Manaus, criado pela Profa. Fatima Souza, 
            cujo nome é “Rede Cachoeiras de Letras”.
          </p>
          <p className="mb-6">
            Deste movimento em Rede, nasceu a Biblioteca Comunitária Maria Dolores no 
            ano de 2021, inspirado na Biblioteca Comunitária Paulo Freire, situada na 
            Comunidade Cristo Rei a 28 km de Presidente Figueiredo, no encontro das suas 
            idealizadoras: Sebastiana Nunes da Silva e Elzimar Ferreira, que doou parte 
            do acervo para a nova biblioteca, que faz parte do Centro Espírita Maria 
            Dolores, situado à Rua 01, Conjunto SHAM, n.9, Centro, Itacoatiara (AM).
          </p>
          <p className="mb-6">
            Este empoderamento construído nos encontros e ciclos formativos da Rede 
            Nacional de Bibliotecas Comunitárias (RNBC) encorajou a mim e a Professora 
            Doutora Ethel Silva de Oliveira (docente do quadro efetivo da UEA, lotada no 
            Curso de Licenciatura em Computação- CESIT-UEA), a submetermos à Secretaria de 
            Cultura do Estado do Amazonas, no âmbito do Edital da Lei Aldir Blanc, o 
            Projeto: Biblioteca Comunitária Maria Dolores: um ponto de cultura e 
            humanização, pela instituição filantrópica sem fins lucrativos, o Centro 
            Espírita Maria Dolores, no qual somos voluntárias, em parceria com outras 
            mulheres da referida organização. Enquanto estes processos prosseguiam seus 
            trâmites íamos nos qualificando quanto ao papel de uma Biblioteca Comunitária.
          </p>
          <p className="mb-6">
            De acordo com a RNBC as bibliotecas comunitárias surgem por iniciativa das 
            comunidades e são gerenciados por elas; ou, ainda, espaços que, embora não 
            tenham sido iniciativas das próprias comunidades, se voltam para atendê-las e 
            as incluem nos processos de planejamento, gestão, monitoramento e avaliação.
          </p>
          <p className="mb-6">
            O que caracteriza uma biblioteca comunitária é seu uso público e comunitário, 
            tendo como princípio fundamental a participação de seu público nos processos 
            de gestão compartilhada.
          </p>
          <p className="mb-6">
            Então o projeto foi submetido e engrandecido com o apoio de mulheres estudantes 
            do Curso de licenciatura em computação.
          </p>
          <p className="mb-6">
            O Projeto foi aprovado e resultou em um apoio da comunidade que o recebeu com 
            grande alegria.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComoTudoComecou;
