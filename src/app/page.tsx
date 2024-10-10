'use client';
import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import AboutSection from './components/aboutSection';
import ScrollToTopButton from './components/scrollToTopButton';
import SupportersSection from './components/supportersSection';
import EmprestimoLivrosSection from './components/emprestimoLivrosSection'; 

const OngsPage = () => {
  const content = {
    title: 'Biblioteca Maria Dolores Chico Chavier',
    description: 'Promover um ponto de cultura.',
    aboutTitle: 'SOBRE NÓS!',
    aboutDescription1:
      'Biblioteca Comunitária, um ponto de cultura e humanização',
    aboutDescription2:
      'Um espaço da produção de diferentes manifestações artísticas. Além de propiciar o acesso a diversidade literária para a comunidade, a biblioteca realiza rodas de leituras, rodas musicais, concurso de poesia e desenho e oficinas de contação de histórias.',
    supporters: [
      {
        logoUrl: '/assets/uea_logo_horizontal_verde.png',
        name: 'Empresa Apoiadora 1',
        alt: 'Logo da Empresa Apoiadora 1',
      },
      {
        logoUrl: '/assets/proex_400.png',
        name: 'Empresa Apoiadora 2',
        alt: 'Logo da Empresa Apoiadora 2',
      },
      {
        logoUrl: '/assets/preview.png',
        name: 'Empresa Apoiadora 3',
        alt: 'Logo da Empresa Apoiadora 3',
      },
      {
        logoUrl: '/assets/E-mail-PROEX-3-removebg-preview.png',
        name: 'Empresa Apoiadora 4',
        alt: 'Logo da Empresa Apoiadora 4',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-between">
      <div>
        <Header title={content.title} description={content.description} />
      </div>
      <main className="container mx-auto px-4 py-8">
        <AboutSection
          aboutTitle={content.aboutTitle}
          aboutDescription1={content.aboutDescription1}
          aboutDescription2={content.aboutDescription2}
        />
        <EmprestimoLivrosSection /> 
        <SupportersSection supporters={content.supporters} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default OngsPage;
