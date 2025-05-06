import { useState } from 'react';
import SectorCard from '../../../elements/SectorCard';
import arrow_drop_down_circle from '../../../assets/arrow_drop_down_circle.svg';



interface Sector {
  name: string;
  price: string;
  available: number;
}

export default function Paso1(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  const sectors: Sector[] = Array.from({ length: quantity }, (_, i) => ({
    name: `Sección PREFE1 Fila B asiento ${i}`,
    price: `$${(i + 1) * 100},00 MXN`,
    available: 10 - i,
  }));

  return (
    <div className="flex justify-between gap-6">
      <div className="flex flex-col justify-start items-start gap-6 w-[632px]">
        <div className="flex flex-col justify-start items-start gap-1 w-full">
          <div className="text-black text-4xl font-bold font-['Open_Sans'] leading-[54px]">
            Selecciona
          </div>
          <div className="text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-tight">
            JUE 23 MAR 2023 16:00
          </div>
          <div className="text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
            Christian Nodal evento en vivo
          </div>
          <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
            Zapopan, JAL. Auditorio Telmex
          </div>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="mt-2 px-2 py-1 border border-zinc-300 rounded w-32 text-sm text-black"
          />
        </div>

        <div className="w-full inline-flex justify-start items-start gap-4">
          {['Todos los precios', 'Tipo de boleto'].map((label, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-end items-center gap-1 overflow-hidden"
            >
              <div className="w-6 h-6 relative">
                <img src={arrow_drop_down_circle} alt="Ticket icon" className="w-5 h-5 absolute inset-0" />
              </div>
              {label && (
                <div className="text-right justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                  {label}
                </div>
              )}
            </div>
          ))}
        </div>

        {sectors.map((sector, index) => (
          <SectorCard key={index} {...sector} />
        ))}
      </div>

      <div className="w-[583px] h-[751px] bg-zinc-100 rounded-2xl"></div>
    </div>
  );
}
