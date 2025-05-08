import { useNavigate } from 'react-router-dom';

export default function Paso3() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/BuyProcces/success');
    };

    return (
        <div className="w-[632px] inline-flex flex-col justify-start items-end gap-6">
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="w-[632px] text-black text-4xl font-bold font-['Open_Sans'] leading-[54px]">
                    Pago
                </div>
                <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                    Selecciona un método de pago
                </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal">
                    Selecciona un método de pago
                </div>
                <div className="self-stretch p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center gap-2">
                    <div className="w-10 p-0.5">
                        <img className="w-7 h-7" src="https://placehold.co/28x28" alt="kueski" />
                    </div>
                    <div className="flex-1 text-black text-base font-normal font-['Open_Sans'] leading-normal">
                        Kueski
                    </div>
                    <div className="w-6 h-6 relative">
                        <div className="w-6 h-6 absolute bg-zinc-300"></div>
                        <div className="w-4 h-4 absolute left-[3px] top-[3px] bg-black"></div>
                    </div>
                </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal">
                    Nombre de la tarjeta
                </div>
                <div className="self-stretch px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300">
                    <input type="text" className="w-full bg-transparent outline-none" />
                </div>
            </div>

            <div className="self-stretch flex justify-start items-start gap-4">
                {['Vence el mes', 'Vence el año', 'Número de seguridad'].map((label, idx) => (
                    <div key={idx} className="flex-1 flex flex-col gap-1">
                        <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal">
                            {label}
                        </div>
                        <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300">
                            <input type="text" className="w-full bg-transparent outline-none" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-1">
                <div className="w-[632px] flex flex-col gap-1">
                    <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal">
                        Selecciona una dirección
                    </div>
                    <div className="p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-between items-center">
                        <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                            Nombre de la dirección
                        </div>
                        <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 absolute bg-zinc-300"></div>
                            <div className="w-4 h-4 absolute left-[3px] top-[3px] bg-black"></div>
                        </div>
                    </div>
                </div>
                <div className="text-amber-500 text-base font-normal font-['Open_Sans'] leading-normal">
                    Actualiza tus datos
                </div>
            </div>

            {/* <div
                onClick={handleSubmit}
                className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg flex justify-center items-center gap-2.5 cursor-pointer"
            >
                <div className="text-white text-base font-normal font-['Open_Sans'] leading-normal">
                    Continuar y pagar
                </div>
            </div> */}
        </div>
    );
}