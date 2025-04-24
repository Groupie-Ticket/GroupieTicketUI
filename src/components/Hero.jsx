import React from 'react';
import banner from '../assets/banner.png';

export default function Hero() {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center text-white flex items-center px-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Santa fe clan en vivo gira 2023</h1>
        <p className="mb-2">UE 23 MAR 2023 16:00 Monterrey, NL - Parque Fundidora</p>
        <p className="mb-6">
          <strong className="text-xl text-white">$0,000.00</strong>
          <span className="ml-4">Quedan 49 boletos</span>
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded">
            Comprar boleto
          </button>
          <button className="px-6 py-2 border border-white rounded">
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}