import artista4 from '../../assets/artista4.png';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import tiktok from '../../assets/tiktok.svg';

const platforms = [
  { name: 'facebook', icon: facebook },
  { name: 'Instagram', icon: instagram },
  { name: 'Tiktok', icon: tiktok },
];

export default function CompraExitosa() {
  return (
    <div className="w-full bg-black overflow-hidden flex justify-center items-start pt-14">
      <div className="w-[848px] p-6 bg-white rounded-2xl flex flex-col items-center gap-4">
        {/* <div className="w-full flex justify-end">
          <div className="w-6 h-6 relative">
            <div className="w-6 h-6 absolute bg-zinc-300"></div>
            <div className="w-3 h-3 absolute left-[5.7px] top-[5.7px] bg-black"></div>
          </div>
        </div> */}

        <div className="text-center text-black text-5xl font-bold font-['Open_Sans'] leading-[72px]">
          Compra exitosa
        </div>

        <img
          className="h-[355px] rounded-3xl object-cover"
          src={artista4}
          alt="Compra realizada"
        />

        <div className="text-center text-black text-xl font-normal font-['Open_Sans'] leading-loose">
          Nuestro concierto promete ser una noche inolvidable, llena de buena música y diversión. Contaremos con una amplia variedad de canciones que seguramente harán que se sienta como en casa.
        </div>

        <div className="w-full flex gap-4">
          {platforms.map(({ name, icon }) => (
            <div
              key={name}
              className="flex-1 px-4 py-2 rounded-lg outline outline-1 outline-zinc-300 flex justify-center items-center gap-2"
            >
              <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                Comparte en {name}
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                <img src={icon} alt={`${name} icon`} className="w-6 h-6 object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
