// src/elements/SectorCard.tsx
import React from 'react';
import artista4 from '../assets/artista4.png';
import ticket from '../assets/ticket.svg';

interface SectorCardProps {
  name: string;
  price: string;
  available: number;
  selected?: boolean;
  onSelect?: () => void;
}

export default function SectorCard({
  name,
  price,
  available,
  selected = false,
  onSelect,
}: SectorCardProps) {
  const id = `sector-${name.replaceAll(' ', '-')}`;

  return (
    <label
      htmlFor={id}
      className={`rounded-lg outline outline-1 outline-offset-[-1px] ${
        selected ? 'outline-black' : 'outline-amber-500'
      } cursor-pointer inline-flex flex-col justify-start items-start gap-6 w-full`}
    >
      <div className="self-stretch px-2 py-4 inline-flex justify-start items-center gap-4">
        <img
          className="w-32 self-stretch rounded-lg object-cover"
          src={artista4}
          alt="Sector preview"
        />

        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
            {name}
          </div>
          <div className="inline-flex justify-start items-center gap-2">
            <div className="px-1.5 py-px bg-green-400 rounded-lg flex justify-start items-center gap-0.5">
              <div className="w-5 h-5 relative">
                <img src={ticket} alt="Ticket icon" className="w-5 h-5 absolute inset-0" />
              </div>
              <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                {available}
              </div>
            </div>
            <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
              Mejor visibilidad
            </div>
            <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
              Boleto en reventa
            </div>
          </div>
          <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal">
            {price}
          </div>
        </div>

        <input
          id={id}
          type="radio"
          name="sector"
          checked={selected}
          onChange={onSelect}
          className="w-6 h-6 rounded-full border border-zinc-300 checked:bg-black appearance-none cursor-pointer relative"
        />
      </div>
    </label>
  );
}