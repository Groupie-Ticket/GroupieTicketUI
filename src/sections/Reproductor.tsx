import { useState, ChangeEvent, useRef, useEffect } from 'react';
import playIcon from '../assets/play.svg';
import pauseIcon from '../assets/pause.svg';
import skipNextIcon from '../assets/skip_next.svg';
import skipPreviousIcon from '../assets/skip_previous.svg';
import volumeUpIcon from '../assets/volume_up.svg';

interface ReproductorProps {
  song?: {
    title: string;
    url: string;
  };
  onPlayStateChange?: (playing: boolean) => void;
}

export default function Reproductor({ song, onPlayStateChange }: ReproductorProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (onPlayStateChange) {
      onPlayStateChange(isPlaying);
    }
  }, [isPlaying, onPlayStateChange]);

  const togglePlay = (): void => {
    if (!audioRef.current || !song) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  if (!song) return null;

  return (
    <div className="w-full px-20 py-2 bg-black flex justify-between items-center gap-10">
      <div className="flex-1 flex items-center gap-2">
        <div className="text-white text-sm font-bold leading-tight">Nombre canción</div>
        <div className="text-white text-sm font-normal leading-tight">Nombre del artista</div>
      </div>

      <div className="flex items-center gap-4">
        <audio ref={audioRef} src={song.url} />
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
