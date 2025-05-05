// src/elements/SectorCard.tsx
import React from 'react';

interface SectorCardProps {
  name: string;
  price: string;
  available: number;
}

export default function SectorCard({ name, price, available }: SectorCardProps): JSX.Element {
  return (
    <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500 inline-flex flex-col justify-start items-start gap-6">
      <div className="self-stretch px-2 py-4 inline-flex justify-start items-center gap-4">
        <img
          className="w-28 self-stretch rounded-lg"
          src="https://placehold.co/107x85"
          alt="Sector preview"
        />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div className="self-stretch text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
            {name}
          </div>
          <div className="inline-flex justify-start items-center gap-2">
            <div className="px-1.5 py-px bg-green-400 rounded-lg flex justify-start items-center gap-0.5">
              <div className="w-5 h-5 relative">
                <div className="w-5 h-5 absolute bg-zinc-300"></div>
                <div className="w-3.5 h-3 absolute left-[2.5px] top-[4.17px] bg-black"></div>
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
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 absolute bg-zinc-300"></div>
          <div className="w-4 h-4 absolute left-[3px] top-[3px] bg-gradient-to-r from-amber-500 to-yellow-700"></div>
        </div>
      </div>
    </div>
  );
}