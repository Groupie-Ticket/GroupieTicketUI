import Publicity from '../../elements/Publicity';
import publicity1 from '../../assets/publicity1.png';
import publicity2 from '../../assets/publicity2.png';
import publicity3 from '../../assets/publicity3.png';

interface PublicityItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const publicities: PublicityItem[] = [
  {
    id: 1,
    title: 'Nombre de la publicidad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    image: publicity1,
  },
  {
    id: 2,
    title: 'Nombre de la publicidad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    image: publicity2,
  },
  {
    id: 3,
    title: 'Nombre de la publicidad',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
    image: publicity3,
  },
];

export default function Promocionated() {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 text-black text-xl font-bold font-['Open_Sans'] leading-loose">
          Promocionado
        </div>
        <div className="text-right text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
          Promociónate
        </div>
      </div>

      <div className="flex justify-start items-start gap-4">
        {publicities.map((promo) => (
          <Publicity key={promo.id} {...promo} />
        ))}
      </div>
    </div>
  );
}
