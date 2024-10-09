'use client';
import React from 'react';
import Image from 'next/image';

type DonationModalProps = {
  showModal: boolean;
  onClose: () => void;
};

const DonationModal: React.FC<DonationModalProps> = ({ showModal, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Faça uma Doação</h2>
        <div className="relative w-full h-48 mb-4">
          <Image
            src="/assets/qrCode.jpeg"
            alt="QR Code para doação PIX"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded w-full"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default DonationModal;
