import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventStore } from '../store/eventStore';
import { Event, getEvents } from '../constants/events';
import Reproductor from './Reproductor';

export default function Hero() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const { setSelectedEvent } = useEventStore();
  const events = getEvents();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPlaying) {
      interval = setInterval(() => {
        setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [events.length, isPlaying]);

  const currentEvent = events[currentEventIndex];

  const handleEventClick = () => {
    setSelectedEvent(currentEvent);
    navigate('/event');
  };

  const handlePrevious = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleNext = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePlayStateChange = (playing: boolean) => {
    setIsPlaying(playing);
  };

  const handleDotClick = (index: number) => {
    setCurrentEventIndex(index);
  };

  return (
    <div className="self-stretch h-[720px] px-20 py-6 bg-black/60 inline-flex flex-col justify-center items-center gap-4 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${currentEvent.image})` }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="self-stretch flex-1 inline-flex justify-start items-center gap-20 z-20">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
          <div className="self-stretch flex flex-col justify-center items-start gap-0.5">
            <div className="self-stretch justify-center text-white text-xl font-bold font-['Open_Sans'] leading-loose">
              {currentEvent.venue}
            </div>
            <div className="justify-center text-white text-xl font-normal font-['Open_Sans'] leading-loose">
              {currentEvent.location}
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-center text-white text-5xl font-bold font-['Open_Sans'] leading-[72px]">
              {currentEvent.artist}
            </div>
            <div className="self-stretch justify-center text-white text-2xl font-bold font-['Open_Sans'] leading-9">
              {currentEvent.datetime}
            </div>
          </div>
          <div
            onClick={handleEventClick}
            className="px-9 py-2 rounded-lg outline outline-2 outline-offset-[-1.80px] outline-amber-500 inline-flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer"
          >
            <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
              Ir al evento
            </div>
          </div>
        </div>
        <img 
          className="w-[700px] h-[400px] object-cover rounded-lg" 
          src={currentEvent.image} 
          alt={currentEvent.artist} 
        />
      </div>

      <div className="w-52 inline-flex justify-start items-start gap-4 z-20">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`flex-1 h-1 rounded-lg cursor-pointer transition-colors duration-200 ${
              index === currentEventIndex ? 'bg-zinc-500' : 'bg-zinc-700 hover:bg-zinc-600'
            }`}
          />
        ))}
      </div>

      <div className="w-full flex justify-between items-center z-20">
        <div className="flex-1 flex justify-end items-center">
          {currentEvent.song && (
            <Reproductor 
              song={currentEvent.song} 
              onPlayStateChange={handlePlayStateChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
