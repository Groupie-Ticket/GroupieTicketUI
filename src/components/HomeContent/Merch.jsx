import React from 'react';
import Clothing from '../../elements/Clothing';
import merch1 from '../../assets/merch1.png';
import merch2 from '../../assets/merch2.png';
import merch3 from '../../assets/merch3.png';
import merch4 from '../../assets/merch4.png';
import merch5 from '../../assets/merch5.png';

const products = [
    {
        id: 1,
        title: 'Playera futbol',
        description: '100% Cotton',
        price: '$0,000.00 MXN',
        image: merch1,
    },
    {
        id: 2,
        title: 'Imprime tu boleto',
        description: 'Impresión digital',
        price: '$0,000.00 MXN',
        image: merch2,
    },
    {
        id: 3,
        title: 'Gorra de los cholos',
        description: '100% Cotton',
        price: '$0,000.00 MXN',
        image: merch3,
    },
    {
        id: 4,
        title: 'Nombre del producto',
        description: '100% Cotton',
        price: '$0,000.00 MXN',
        image: merch4,
    },
    {
        id: 5,
        title: 'Nombre del producto',
        description: '100% Cotton',
        price: '$0,000.00 MXN',
        image: merch5,
    },
];

export default function Merch() {
    return (
        <div className="flex flex-col justify-start items-center gap-4 w-full">
            <div className="w-full flex justify-between items-center">
                <div className="text-black text-3xl font-bold font-['Open_Sans'] leading-10">
                    Merch
                </div>
                <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
                    Ver más
                </div>
            </div>

            <div className="flex justify-start items-start gap-4">
                {products.map((product) => (
                    <Clothing key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
