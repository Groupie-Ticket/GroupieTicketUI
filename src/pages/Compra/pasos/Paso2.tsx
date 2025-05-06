
export default function Paso2(): JSX.Element {
    return (
        <div className="px-7 py-3.5 bg-neutral-50 rounded-2xl inline-flex flex-col justify-start items-start gap-10">
            <div className="justify-center text-black text-3xl font-bold font-['Open_Sans'] leading-10">
                Detalles de la compra
            </div>

            <div className="self-stretch py-2 border-b border-zinc-200 inline-flex justify-start items-center gap-1">
                <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute">
                        <div className="w-4 h-4 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-yellow-700 rounded border border-white"></div>
                        <div className="w-2 h-1.5 left-[4px] top-[5px] absolute bg-white"></div>
                    </div>
                </div>
                <div className="justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                    Agrega tu promoción del 50% de Groupie rewards
                </div>
            </div>

            <div className="w-[562px] py-2 border-b border-zinc-200 inline-flex justify-start items-center">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
                        x2 Boleto normal digitales
                    </div>
                    <div className="justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                        MX $000.00 x 2
                    </div>
                </div>
                <div className="text-right justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                    $0,000.00
                </div>
            </div>

            <div className="w-[562px] py-2 border-b border-zinc-200 inline-flex justify-start items-center">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
                        Cargos
                    </div>
                    <div className="justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                        MX $000.00
                    </div>
                </div>
                <div className="text-right justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                    $0,000.00
                </div>
            </div>

            <div className="w-[562px] py-2 border-b border-zinc-200 inline-flex justify-start items-center">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="justify-center text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
                        Total
                    </div>
                </div>
                <div className="text-right justify-center text-black text-base font-normal font-['Open_Sans'] leading-normal">
                    $0,000.00
                </div>
            </div>
        </div>
    );
}