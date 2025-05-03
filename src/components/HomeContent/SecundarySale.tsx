import SaleCard from '../../elements/SaleCard';
import sale1 from '../../assets/sale1.png';
import sale2 from '../../assets/sale2.png';

interface Sale {
  id: number;
  date: string;
  title: string;
  location: string;
  price: string;
  endingSoon: string;
  image: string;
}

const sales: Sale[] = [
  {
    id: 1,
    date: 'JUE 23 MAR 2025 16:00',
    title: 'Club Tijuana vs América',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: '',
    image: sale1,
  },
  {
    id: 2,
    date: 'JUE 23 MAR 2025 16:00',
    title: 'Atlas vs Cruz Azul',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: '',
    image: sale2,
  },
];

export default function SecundarySale(): JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full">
      <div className="w-full flex justify-between items-center">
        <div className="text-black text-3xl font-bold font-['Open_Sans'] leading-10">
          Venta secundaria
        </div>
        <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
          Ver más
        </div>
      </div>

      {sales.map((ticket) => (
        <SaleCard key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}
