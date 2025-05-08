import TendencyCard from '../../elements/TendencyCard';
import t1 from '../../assets/t1.png';
import t2 from '../../assets/t2.png';
import t3 from '../../assets/t3.png';
import t4 from '../../assets/t4.png';

interface Event {
    id: number;
    name: string;
    price: string;
    image: string;
}

const events: Event[] = [
    { id: 1, name: 'Charros de Jalisco', price: 'Desde $0,000.00 MXN', image: t1 },
    { id: 2, name: 'Grupo firme', price: 'Desde $0,000.00 MXN', image: t2 },
    { id: 3, name: 'Cartel de Santa', price: 'Desde $0,000.00 MXN', image: t3 },
    { id: 4, name: 'Ckan', price: 'Desde $0,000.00 MXN', image: t4 },
];

export default function Tendency() {
    return (
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex justify-start items-center">
                <div className="flex-1 text-black text-3xl font-bold font-['Open_Sans'] leading-loose">
                    Tendencias
                </div>
                <div className="text-right text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
                    Ver más
                </div>
            </div>
            <div className="flex justify-start items-start gap-4">
                {events.map((event) => (
                    <TendencyCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}
