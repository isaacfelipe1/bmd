import React from 'react';

interface HeaderProps {
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  className,
  style,
  children,
}) => {
  return (
    <header
      className={`relative flex flex-col items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center transition-all duration-500 ease-in-out ${className}`}
      style={{
        ...style,
        backgroundImage:
          style?.backgroundImage ?? 'url(/assets/paginaInicial.jpg)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 87%)',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-white leading-relaxed drop-shadow-md">
          {description}
        </p>
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </header>
  );
};

export default Header;
