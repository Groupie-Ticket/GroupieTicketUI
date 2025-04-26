// src/elements/Clothing.jsx
import React from 'react';
import local_shipping from '../assets/local_shipping.svg';

export default function Clothing({ image, title, description, price }) {
    return (
        <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <img className="self-stretch h-52 rounded-lg" src={image} alt={title} />

            <div className="self-stretch text-black text-lg font-normal font-['Open_Sans'] leading-relaxed">
                {title}
            </div>

            <div className="self-stretch text-black text-base font-normal font-['Open_Sans'] leading-normal">
                {description}
            </div>

            <div className="inline-flex justify-start items-center gap-2">
                <img src={local_shipping} alt="Envío gratis" className="w-6 h-6" />
                <div className="text-green-600 text-base font-normal font-['Open_Sans'] leading-normal">
                    Envío gratis
                </div>
            </div>

            <div className="self-stretch inline-flex justify-start items-start gap-1">
                <div className="flex-1 justify-center text-black text-base font-bold font-['Open_Sans'] leading-normal">
                    {price}
                </div>
            </div>
        </div>
    );
}
