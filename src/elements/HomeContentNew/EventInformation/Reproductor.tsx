import { useState, ChangeEvent, useRef } from 'react';
import playIcon from '../../../assets/play.svg';
import pauseIcon from '../../../assets/pause.svg';
import skipNextIcon from '../../../assets/skip_next.svg';
import skipPreviousIcon from '../../../assets/skip_previous.svg';
import volumeUpIcon from '../../../assets/volume_up.svg';
import { useEventStore } from '../../../store/eventStore';

export default function Reproductor(): JSX.Element | null {
  const event = useEventStore((state) => state.selectedEvent);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!event?.song) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <div className="w-full px-20 py-2 bg-black/20 flex justify-between items-center gap-10">
      <audio ref={audioRef} src={event.song.url} />

      <div className="flex-1 flex justify-start items-start gap-4">
        <div className="text-white text-sm font-bold leading-tight">{event.song.title}</div>
        <div className="text-white text-sm font-normal leading-tight">{event.artist}</div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <img src={skipPreviousIcon} alt="Anterior" className="w-8 h-8 cursor-pointer" />
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? 'Pausa' : 'Reproducir'}
          className="w-8 h-8 cursor-pointer"
          onClick={togglePlay}
        />
        <img src={skipNextIcon} alt="Siguiente" className="w-8 h-8 cursor-pointer" />
      </div>

      <div className="flex-1 flex justify-end items-center">
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
