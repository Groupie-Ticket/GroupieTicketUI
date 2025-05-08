import StreamingCard from '../../elements/StreamingCard';
import streaming1 from '../../assets/streaming1.png';
import streaming2 from '../../assets/streaming2.png';
import streaming3 from '../../assets/streaming3.png';

interface Stream {
  id: number;
  date: string;
  title: string;
  location: string;
  price: string;
  endingSoon: string;
  image: string;
}

const streamings: Stream[] = [
  {
    id: 1,
    date: 'JUE 23 MAR 2023 16:00',
    title: 'Grupo firme presentación especial única fecha',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: 'Finaliza en 0 horas',
    image: streaming1,
  },
  {
    id: 2,
    date: 'JUE 23 MAR 2023 16:00',
    title: 'Julián Álvarez Tour nuevo disco ',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: 'Finaliza en 0 horas',
    image: streaming2,
  },
  {
    id: 3,
    date: 'JUE 23 MAR 2023 16:00',
    title: 'Banda MS Tour Positivo',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: 'Finaliza en 0 horas',
    image: streaming3,
  },
];

export default function Streaming() {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full">
      <div className="w-full flex justify-between items-center">
        <div className="text-black text-3xl font-bold font-['Open_Sans'] leading-10">
          Streaming
        </div>
      </div>

      {streamings.map((ticket) => (
        <StreamingCard key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}
