// src/pages/Compra/partials/FooterBuy.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompraStore } from '../../../store/compraStore';

export default function FooterBuy() {
  const navigate = useNavigate();
  const { currentStep, setStep, eventData, quantity } = useCompraStore();

  const handleContinue = () => {
    setStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      setStep(currentStep - 1);
    }
  };

  if (!eventData) return null;

  const total = eventData.price * quantity;

  return (
    <div className="w-full px-20 py-4 inline-flex justify-start items-center gap-6">
      <div
        onClick={handleBack}
        className="w-40 self-stretch px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
      >
        <div className=" text-base font-normal font-['Open_Sans']">
          Regresar
        </div>
      </div>

      <div className="flex-1 inline-flex flex-col justify-start items-end">
        <div className="text-white text-base font-normal font-['Open_Sans']">
          {quantity} {quantity === 1 ? 'Boleto' : 'Boletos'}
        </div>
        <div className="text-white text-xl font-bold font-['Open_Sans']">
          ${total.toLocaleString()} MXN
        </div>
      </div>

      <div
        onClick={handleContinue}
        className="w-56 self-stretch px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer"
      >
        <div className="text-white text-base font-normal font-['Open_Sans']">
          Continuar y pagar
        </div>
      </div>
    </div>
  );
}
