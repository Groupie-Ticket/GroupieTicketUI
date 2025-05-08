// src/pages/Compra/partials/NavBuy.tsx
import React from 'react';

interface NavBuyProps {
  currentStep?: number;
}

export default function NavBuy({ currentStep = 1 }: NavBuyProps) {
  const steps = [
    {
      step: 1,
      title: 'Encuentra una sección',
      subtitle: 'Selecciona una zona',
    },
    {
      step: 2,
      title: 'Confirma tu pedido',
      subtitle: 'Confirma tus boletos',
    },
    {
      step: 3,
      title: 'Pagar tu boleto',
      subtitle: 'Selecciona un método de pago',
    },
  ];

  return (
    <div className="w-full py-6 border-b border-zinc-200 inline-flex justify-center items-center gap-12">
      {steps.map(({ step, title, subtitle }) => {
        const isActive = currentStep === step;

        return (
          <div key={step} className="flex justify-start items-start gap-2">
            <div
              className={`w-12 h-12 p-2.5 rounded-full inline-flex flex-col justify-center items-center gap-2.5 ${isActive ? 'bg-black' : 'bg-zinc-200'}`}
            >
              <div
                className={`text-2xl font-bold font-['Open_Sans'] leading-9 ${isActive ? 'text-white' : 'text-zinc-500'}`}
              >
                {step}
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start">
              <div
                className={`text-base font-bold font-['Open_Sans'] leading-normal ${isActive ? 'text-black' : 'text-zinc-500'}`}
              >
                {title}
              </div>
              <div
                className={`text-base font-normal font-['Open_Sans'] leading-normal ${isActive ? 'text-black' : 'text-zinc-500'}`}
              >
                {subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
