"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import DonationModal from "../components/donationModal";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  if (!isMounted) {
    return null;
  }

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const unifiedButtonStyle =
    "bg-yellow-500 text-black py-2 px-4 rounded-full font-medium text-sm hover:bg-yellow-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300 transform hover:scale-105 active:bg-yellow-700";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f8f5e8] shadow-md py-2" : "bg-[#f8f5e8] py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo.png"
              alt="Logo Biblioteca Maria Dolores"
              className="w-20 h-20 object-contain rounded-none fixed right-40 md:left-10 top-4 hover:scale-105 transition-transform"
              style={{ zIndex: 1000 }}
            />
          </Link>

          <div className="hidden md:flex flex-1 justify-center space-x-4">
            <Link href="/" className={unifiedButtonStyle}>
              INÍCIO
            </Link>
            <Link href="../pages/nosso-time" className={unifiedButtonStyle}>
              NOSSO TIME
            </Link>
            <Link href="../pages/como-comecou" className={unifiedButtonStyle}>
              COMO TUDO COMEÇOU
            </Link>
            <Link href="../pages/contato" className={unifiedButtonStyle}>
              CONTATO
            </Link>
            <Link href="../pages/atividade" className={unifiedButtonStyle}>
              ATIVIDADES
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleModal}
              className="bg-yellow-500 text-black py-6 px-6 rounded-none font-bold text-lg hover:bg-yellow-600 hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 md:absolute md:right-10 md:top-0 md:translate-y-[0%]"
              style={{ zIndex: 1000 }}
            >
              Doe Agora
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-[#005226] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005226]"
              aria-label="Toggle mobile menu"
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
          <div
            className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#f8f5e8] z-50 text-[#005226] transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "pt-24" : "pt-16"
            }`}
            ref={mobileMenuRef}
          >
            <div className="container mx-auto px-4 space-y-4 relative">
              <div className="absolute top-2 right-6"> {/* Mudei aqui para alinhar o X */}
                <button
                  className="text-[#005226] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005226]"
                  onClick={() => setIsMobileMenuOpen(false)}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Link
                  href="/"
                  className={unifiedButtonStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INÍCIO
                </Link>
                <Link
                  href="../pages/nosso-time"
                  className={unifiedButtonStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NOSSO TIME
                </Link>
                <Link
                  href="../pages/como-comecou"
                  className={unifiedButtonStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  COMO TUDO COMEÇOU
                </Link>
                <Link
                  href="../pages/contato"
                  className={unifiedButtonStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTATO
                </Link>
                <Link
                  href="../pages/atividade"
                  className={unifiedButtonStyle}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ATIVIDADES
                </Link>
                <button
                  onClick={toggleModal}
                  className="block bg-red-600 text-white py-2 px-4 rounded-full font-bold text-lg hover:bg-red-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  Doe Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isModalOpen && (
        <DonationModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </>
  );
};

export default Navbar;
