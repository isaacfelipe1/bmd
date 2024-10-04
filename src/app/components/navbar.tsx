'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-colors duration-300 ${
        scrolled ? 'bg-[#f8f5e8] shadow-md' : 'bg-[#f8f5e8]'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="Logo Biblioteca Maria Dolores"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-semibold text-[#005226]">
            Biblioteca Maria Dolores
          </span>
        </Link>
        <div className="hidden md:flex flex-1 justify-center space-x-3">
          <Link
            href="/"
            className="bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
          >
            INÍCIO
          </Link>
          <Link
            href="../pages/nosso-time"
            className="bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
          >
            NOSSO TIME
          </Link>
          <Link
            href="../pages/como-comecou"
            className="bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
          >
            COMO TUDO COMEÇOU
          </Link>
          <Link
            href="/contato"
            className="bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
          >
            CONTATO
          </Link>
          <Link
            href="../pages/como-chegar"
            className="bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
          >
            COMO CHEGAR
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-[#005226] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f8f5e8] text-[#005226] py-4">
          <div className="container mx-auto px-4 space-y-3">
            <Link
              href="/"
              className="block bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              INÍCIO
            </Link>
            <Link
              href="../pages/nosso-time"
              className="block bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NOSSO TIME
            </Link>
            <Link
              href="../pages/como-comecou"
              className="block bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COMO TUDO COMEÇOU
            </Link>
            <Link
              href="/contato"
              className="block bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTATO
            </Link>
            <Link
              href="../pages/como-chegar"
              className="block bg-[#FFA500] text-white py-1 px-3 rounded-full font-medium text-sm hover:bg-[#FF8C00] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COMO CHEGAR
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
