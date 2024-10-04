'use client';

import React from 'react';

interface LocalVideoDirectionsProps {
  videoPath: string;
  title?: string;
}

const LocalVideoDirections: React.FC<LocalVideoDirectionsProps> = ({
  videoPath,
  title,
}) => {
  return (
    <div className="my-8">
      {title && <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>}
      <div className="mx-auto" style={{ maxWidth: '400px' }}>
        <video
          className="w-full h-auto rounded-md shadow-lg"
          controls
          style={{ maxHeight: '500px' }}
        >
          <source src={videoPath} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>
    </div>
  );
};

export default LocalVideoDirections;
