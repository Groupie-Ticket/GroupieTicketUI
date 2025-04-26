import React from 'react';
import PopularCard from '../../elements/PopularCard';
import popular1 from '../../assets/popular1.png';
import popular2 from '../../assets/popular2.png';
import popular3 from '../../assets/popular3.png';
import popular4 from '../../assets/popular4.png';

const events = [
    {
        id: 1,
        name: 'Charros de Jalisco',
        price: 'Desde $0,000.00 MXN',
        image: popular1,
    },
    {
        id: 2,
        name: 'Grupo firme',
        price: 'Desde $0,000.00 MXN',
        image: popular2,
    },
    {
        id: 3,
        name: 'Cartel de Santa',
        price: 'Desde $0,000.00 MXN',
        image: popular3,
    },
    {
        id: 4,
        name: 'Ckan',
        price: 'Desde $0,000.00 MXN',
        image: popular4,
    },
];

export default function PopularEvents() {
    return (
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex justify-start items-center">
            <div className="flex-1 text-black text-3xl font-bold font-['Open_Sans'] leading-loose">
                    Populares
                </div>
                <div className="text-right text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
                    Ver más
                </div>
            </div>

            <div className="flex justify-start items-start gap-4">
                {events.map((event) => (
                    <PopularCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}
