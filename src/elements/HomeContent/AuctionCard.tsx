// src/elements/AuctionCard.tsx
import React from 'react';
import BuyTicket from './buttons/BuyTicket';

interface AuctionCardProps {
  date: string;
  title: string;
  location: string;
  price: string;
  endingSoon?: string;
  image: string;
}

export default function AuctionCard({
  date,
  title,
  location,
  price,
  endingSoon,
  image,
}: AuctionCardProps): JSX.Element {
  return (
    <div className="w-full py-4 border-b border-zinc-200 flex justify-start items-center gap-4">
      <img className="w-48 h-28 rounded-lg" src={image} alt={title} />

      <div className="flex-1 flex flex-col justify-start items-start gap-1">
        <div className="text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-tight">
          {date}
        </div>
        <div className="text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
          {title}
        </div>
        <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
          {location}
        </div>
        <div className="flex justify-start items-center gap-2">
          <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal">
            {price}
          </div>
          {endingSoon && (
            <div className="p-1 rounded flex justify-start items-center gap-2.5 overflow-hidden">
              <div className="text-center text-red-500 text-sm font-bold font-['Open_Sans'] leading-tight">
                {endingSoon}
              </div>
            </div>
          )}
        </div>
      </div>

      <BuyTicket onClick={() => {}} />
    </div>
  );
}
