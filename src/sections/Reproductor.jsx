import React from 'react';

export default function Reproductor() {
  return (
    <div className="w-full px-20 py-2 bg-black inline-flex justify-start items-center gap-10">
      <div className="flex-1 flex justify-start items-start gap-2">
        <div className="text-white text-sm font-bold font-['Open_Sans'] leading-tight">
          Nombre canción
        </div>
        <div className="text-white text-sm font-normal font-['Open_Sans'] leading-tight">
          Nombre del artista
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-zinc-300"></div>
          <div className="w-3.5 h-3 absolute left-[8.97px] top-[9.83px] bg-white"></div>
        </div>
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-zinc-300"></div>
          <div className="w-6 h-6 absolute left-[4px] top-[4px] bg-white"></div>
        </div>
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-zinc-300"></div>
          <div className="w-3.5 h-3 absolute left-[8.97px] top-[9.83px] bg-white"></div>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 bg-zinc-300"></div>
          <div className="w-5 h-5 absolute left-[5.73px] top-[5.93px] bg-white"></div>
        </div>
        <div className="w-20 h-1 bg-white rounded-lg"></div>
      </div>
    </div>
  );
}
