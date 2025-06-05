// src/elements/buttons/BuyTicket.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompraStore } from '../../store/compraStore';

interface BuyTicketEventInformationProps {
    name: string;
    price: number;
    available: number;
    venue: string;
    location: string;
    datetime: string;
    image: string;
}

export default function BuyTicketEventInformation({ name, price, available, venue, location, datetime, image }: BuyTicketEventInformationProps) {
    const navigate = useNavigate();
    const { setEventData } = useCompraStore();

    const handleClick = () => {
        setEventData({ name, price, available, venue, location, datetime, image });
        navigate('/BuyProcces');
    };

    return (
        <div
            onClick={handleClick}
            className="w-full max-w-[1064px] py-4 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg outline outline-2 outline-offset-[-1.80px] outline-amber-500 inline-flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
        >
            <div className="text-white text-base font-bold">
                Comprar boleto
            </div>
            <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
                ${price}
            </div>
        </div>
    );
}