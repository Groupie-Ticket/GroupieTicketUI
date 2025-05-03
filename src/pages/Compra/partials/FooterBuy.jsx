import React from 'react';

export default function FooterBuy() {
    return (
        <div className="w-full  px-20 py-4 bg-black shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.06)] inline-flex justify-start items-center gap-6">
            <div className="w-40 self-stretch px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500 flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer">
                <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
                    Regresar
                </div>
            </div>

            <div className="flex-1 inline-flex flex-col justify-start items-end">
                <div className="justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
                    2 Boletos
                </div>
                <div className="justify-center text-white text-xl font-bold font-['Open_Sans'] leading-loose">
                    $0,000.00 MXN
                </div>
            </div>

            <div className="w-56 self-stretch px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer">
                <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
                    Continuar y pagar
                </div>
            </div>
        </div>
    );
}
