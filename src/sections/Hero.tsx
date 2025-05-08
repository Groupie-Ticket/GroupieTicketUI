import banner from '../assets/banner.png';

export default function Hero() {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center text-white flex items-center px-20 relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="inline-flex flex-col justify-start items-start gap-2">
        <div className="self-stretch justify-center text-white text-5xl font-bold font-['Open_Sans'] leading-[72px]">
          Santa fe clan en vivo gira 2023
        </div>
        <div className="justify-center text-white text-xl font-semibold font-['Open_Sans'] leading-loose">
          UE 23 MAR 2023 16:00 Monterrey, NLParque Fundidora
        </div>
        <div className="inline-flex justify-start items-center gap-2">
          <div className="justify-center text-white text-2xl font-bold font-['Open_Sans'] leading-9">
            $0,000.00
          </div>
          <div className="justify-center text-white text-xl font-normal font-['Open_Sans'] leading-loose">
            Quedan 49 boletos
          </div>
        </div>
        <div className="inline-flex justify-start items-start gap-6">
          <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg flex justify-start items-center gap-2.5 overflow-hidden">
            <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
              Comprar boleto
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500 flex justify-start items-center gap-2.5 overflow-hidden">
            <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
              Más información
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
