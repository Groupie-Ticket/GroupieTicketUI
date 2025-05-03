import TicketCard from '../../elements/TicketCard';
import ticket1 from '../../assets/ticket1.png';
import ticket2 from '../../assets/ticket2.png';
import ticket3 from '../../assets/ticket3.png';

interface Ticket {
  id: number;
  date: string;
  title: string;
  location: string;
  price: string;
  endingSoon: string;
  image: string;
}

const tickets: Ticket[] = [
  {
    id: 1,
    date: 'JUE 23 MAR 2023 16:00',
    title: 'Santa fe clan en vivo',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: 'Finaliza en 0 horas',
    image: ticket1,
  },
  {
    id: 2,
    date: 'JUE 23 MAR 2023 16:00',
    title: 'Natanael  Cano',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: 'Finaliza en 0 horas',
    image: ticket2,
  },
  {
    id: 3,
    date: 'JUE 23 MAR 2023 16:00',
    title: 'Nortec evento especial',
    location: 'Zapopan, JAL. Auditorio Telmex',
    price: 'Desde $0,000.00 MXN',
    endingSoon: 'Finaliza en 0 horas',
    image: ticket3,
  },
];

export default function NewTickets(): JSX.Element {
  return (
    <div className="flex flex-col justify-start items-center gap-4 w-full">
      <div className="w-full flex justify-between items-center">
        <div className="text-black text-3xl font-bold font-['Open_Sans'] leading-10">
          Nuevos boletos
        </div>
        <div className="text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
          Ver más
        </div>
      </div>

      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}
