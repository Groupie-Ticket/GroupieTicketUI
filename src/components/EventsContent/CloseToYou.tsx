import CloseToYouCard from '../../elements/CloseToYouCard';
import cty1 from '../../assets/cty1.png';
import cty2 from '../../assets/cty2.png';
import cty3 from '../../assets/cty3.png';
import cty4 from '../../assets/cty4.png';

interface Event {
    id: number;
    name: string;
    price: string;
    image: string;
}

const events: Event[] = [
    { id: 1, name: 'Charros de Jalisco', price: 'Desde $0,000.00 MXN', image: cty1 },
    { id: 2, name: 'Grupo firme', price: 'Desde $0,000.00 MXN', image: cty2 },
    { id: 3, name: 'Cartel de Santa', price: 'Desde $0,000.00 MXN', image: cty3 },
    { id: 4, name: 'Ckan', price: 'Desde $0,000.00 MXN', image: cty4 },
];

export default function CloseToYou(): JSX.Element {
    return (
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex justify-start items-center">
                <div className="flex-1 text-black text-3xl font-bold font-['Open_Sans'] leading-loose">
                    Cerca de ti
                </div>
                <div className="text-right text-black text-base font-bold font-['Open_Sans'] leading-normal cursor-pointer">
                    Ver más
                </div>
            </div>
            <div className="flex justify-start items-start gap-4">
                {events.map((event) => (
                    <CloseToYouCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}
