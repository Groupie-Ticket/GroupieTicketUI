import React from 'react';
import favorite from '../assets/favorite.svg';


export default function TendencyCard({ image, name, price }) {
    return (
        <div className="inline-flex flex-col justify-start items-start gap-1">
            <img className="w-80 h-48 rounded-lg" src={image} alt={name} />
            <div className="self-stretch justify-start text-black text-lg font-normal font-['Open_Sans'] leading-relaxed">
                {name}
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-1">
                <div className="flex-1 justify-center text-black text-base font-bold font-['Open_Sans'] leading-normal">
                    {price}
                </div>
                <img src={favorite} alt="Favorite" className="w-6 h-6" />
            </div>
        </div>
    );
}
