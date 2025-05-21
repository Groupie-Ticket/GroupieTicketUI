// src/elements/buttons/BuyTicket.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompraStore } from '../../store/compraStore';

interface BuyTicketProps {
  name: string;
  price: number;
  available: number;
  venue: string;
  location: string;
  datetime: string;
  image: string;
}

export default function BuyTicket({ name, price, available, venue, location, datetime, image }: BuyTicketProps) {
  const navigate = useNavigate();
  const { setEventData } = useCompraStore();

  const handleClick = () => {
    setEventData({ name, price, available, venue, location, datetime, image });
    navigate('/BuyProcces');
  };

  return (
    <div
      onClick={handleClick}
      className="px-9 py-4 rounded-lg outline outline-2 outline-offset-[-1.80px] outline-amber-500 inline-flex justify-start items-center gap-2.5 overflow-hidden cursor-pointer"
    >
      <div className="text-center justify-center text-white text-base font-bold font-['Open_Sans'] leading-normal">
        Comprar boleto
      </div>
      {/* <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
        desde
      </div> */}
      <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
        ${price}
      </div>
    </div>
  );
}
