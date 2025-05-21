// src/pages/Compra/Paso1.tsx
import { useState } from 'react';
import { useCompraStore } from '../../../store/compraStore';

export default function Paso1() {
  const { eventData, quantity, setQuantity } = useCompraStore();

  if (!eventData) {
    return <div>No hay datos del evento disponibles</div>;
  }

  const { name, venue, location, datetime, price, image } = eventData;

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <div className="inline-flex flex-col justify-start items-start gap-6 w-1/2">
        <img className="self-stretch h-120 object-contain rounded-lg" src={image} alt={name} />

        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch text-black text-3xl font-bold leading-10">{name}</div>

          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch py-3.5 border-b border-zinc-200 inline-flex justify-between items-center">
              <div className="text-black text-lg font-normal">Sede</div>
              <div className="text-black text-lg font-semibold">{venue}</div>
            </div>
            <div className="self-stretch py-3.5 border-b border-zinc-200 inline-flex justify-between items-center">
              <div className="text-black text-lg font-normal">Lugar</div>
              <div className="text-black text-lg font-semibold">{location}</div>
            </div>
            <div className="self-stretch py-3.5 border-b border-zinc-200 inline-flex justify-between items-center">
              <div className="text-black text-lg font-normal">Fecha y Hora</div>
              <div className="text-black text-lg font-semibold">{datetime}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch py-4 flex flex-col gap-4 justify-center items-center">
        <div className="w-1/2 px-6 py-4 rounded-lg outline outline-1 outline-black flex gap-4">
          <div className="flex-1 text-black text-base font-bold">Cantidad de boletos</div>

          <button
            className="w-6 h-6 bg-zinc-300 flex items-center justify-center"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>

          <div className="text-black text-base font-bold">{quantity}</div>

          <button
            className="w-6 h-6 bg-zinc-300 flex items-center justify-center"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <div className="w-1/2 px-6 py-4 rounded-lg outline outline-1 outline-black flex justify-between items-center">
          <div className="text-black text-base font-bold">Precio por boleto</div>
          <div className="text-black text-base font-bold">${price.toLocaleString()}</div>
        </div>

        <div className="w-1/2 px-6 py-4 rounded-lg outline outline-1 outline-black flex justify-between items-center">
          <div className="text-black text-base font-bold">Total</div>
          <div className="text-black text-base font-bold">${(price * quantity).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
