import arrowDropDown from '../../assets/arrow_drop_down.svg';
import tune from '../../assets/tune.svg';
import filter from '../../assets/filter.svg';

export default function EventsBuyTickets(): JSX.Element {
    return (
        <div className="flex flex-col justify-start items-start gap-4">
            <div className="self-stretch text-black text-4xl font-bold font-['Open_Sans'] leading-[54px]">
                Comprar boleto
            </div>
            <div className="self-stretch flex justify-start items-start gap-4">
                <div className="flex-1 flex justify-start items-start gap-4">
                    <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-center items-center gap-1 overflow-hidden">
                        <img src={tune} alt="Filtro" className="w-6 h-6" />
                    </div>
                    <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-center items-center gap-1 overflow-hidden">
                        <img src={filter} alt="Categorías" className="w-6 h-6" />
                        <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                            Categorías
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-center items-center gap-1 overflow-hidden">
                    <img src={arrowDropDown} alt="Ordenar por" className="w-6 h-6" />
                    <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                        Ordenar por
                    </div>
                </div>
            </div>
        </div>
    );
}
