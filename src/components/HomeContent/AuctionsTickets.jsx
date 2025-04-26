import React from 'react';
import AuctionCard from '../../elements/AuctionCard';
import auction1 from '../../assets/auction1.png';
import auction2 from '../../assets/auction2.png';
import auction3 from '../../assets/auction3.png';

const auctions = [
    {
        id: 1,
        date: 'JUE 23 MAR 2023 16:00',
        title: 'Grupo firme presentación especial única fecha',
        location: 'Zapopan, JAL. Auditorio Telmex',
        price: 'Desde $0,000.00 MXN',
        endingSoon: 'Finaliza en 0 horas',
        image: auction1,
    },
    {
        id: 2,
        date: 'JUE 23 MAR 2023 16:00',
        title: 'Julián Álvarez Tour nuevo disco ',
        location: 'Zapopan, JAL. Auditorio Telmex',
        price: 'Desde $0,000.00 MXN',
        endingSoon: 'Finaliza en 0 horas',
        image: auction2,
    },
    {
        id: 3,
        date: 'JUE 23 MAR 2023 16:00',
        title: 'Banda MS Tour Positivo',
        location: 'Zapopan, JAL. Auditorio Telmex',
        price: 'Desde $0,000.00 MXN',
        endingSoon: 'Finaliza en 0 horas',
        image: auction3,
    },
];

export default function AuctionsTickets() {
    return (
        <div className="flex flex-col justify-start items-center gap-4 w-full">
            <div className="w-full flex justify-between items-center">
                <div className="text-black text-3xl font-bold font-['Open_Sans'] leading-10">
                    Subastas boletos
                </div>
                <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
                    Ver más
                </div>
            </div>

            {auctions.map((ticket) => (
                <AuctionCard key={ticket.id} {...ticket} />
            ))}
        </div>
    );
}
