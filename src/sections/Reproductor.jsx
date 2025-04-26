// src/components/Reproductor.jsx
import React, { useState } from 'react';
import playIcon from '../assets/play.svg';
import pauseIcon from '../assets/pause.svg';
import skipNextIcon from '../assets/skip_next.svg';
import skipPreviousIcon from '../assets/skip_previous.svg';
import volumeUpIcon from '../assets/volume_up.svg';

export default function Reproductor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const handleVolumeChange = (e) => setVolume(e.target.value);

  return (
    <div className="w-full px-20 py-2 bg-black flex justify-between items-center gap-10">
      <div className="flex-1 flex items-center gap-2">
        <div className="text-white text-sm font-bold leading-tight">Nombre canción</div>
        <div className="text-white text-sm font-normal leading-tight">Nombre del artista</div>
      </div>

      <div className="flex items-center gap-4">
        <img src={skipPreviousIcon} alt="Anterior" className="w-8 h-8 cursor-pointer" />
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? 'Pausa' : 'Reproducir'}
          className="w-8 h-8 cursor-pointer"
          onClick={togglePlay}
        />
        <img src={skipNextIcon} alt="Siguiente" className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="flex-1 flex items-center justify-end gap-4">
        <img src={volumeUpIcon} alt="Volumen" className="w-8 h-8" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="h-1 w-20 bg-white rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
