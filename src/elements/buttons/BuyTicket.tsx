// src/elements/buttons/BuyTicket.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/foward.svg';

interface BuyTicketProps {
  name: string;
  price: string;
  available: number;
}

export default function BuyTicket({ name, price, available }: BuyTicketProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate('/BuyProcces', {
          state: { name, price, available },
        })
      }
      className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500 flex justify-center items-center gap-2 overflow-hidden cursor-pointer min-w-[180px]"
    >
      <div className="text-center text-amber-500 text-base font-normal font-['Open_Sans'] leading-normal whitespace-nowrap">
        Comprar boleto
      </div>
      <div className="w-6 h-6 relative">
        <img src={arrow} alt="Comprar" className="absolute inset-0 w-6 h-6 object-cover" />
      </div>
    </div>
  );
}
