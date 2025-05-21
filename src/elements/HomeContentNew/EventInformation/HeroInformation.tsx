import React from 'react';
import { useEventStore } from '../../../store/eventStore';
import Reproductor from './Reproductor';
import BuyTicket from '../../buttons/BuyTicket';

export default function HeroInformation() {
    const event = useEventStore((state) => state.selectedEvent);

    if (!event) return null;

    return (
        <div
            className="self-stretch h-[520px] px-20 py-6 inline-flex flex-col justify-center items-start gap-6 overflow-hidden relative"
            style={{
                backgroundImage: `url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="self-stretch flex-1 inline-flex justify-start items-center gap-20 relative z-10">
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-center items-start gap-0.5">
                        <div className="text-white text-xl font-bold leading-loose">{event.venue}</div>
                        <div className="text-white text-xl font-normal leading-loose">{event.location}</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="text-white text-5xl font-bold leading-[72px]">{event.artist}</div>
                        <div className="text-white text-2xl font-bold leading-9">{event.datetime}</div>
                    </div>
                    <BuyTicket 
                        name={event.artist} 
                        price={event.price} 
                        available={event.availableTickets}
                        venue={event.venue}
                        location={event.location}
                        datetime={event.datetime}
                        image={event.image}
                    />
                </div>

                <img className="flex-1 self-stretch" src={event.image} alt={event.artist} />
            </div>

            <div className="relative z-10 w-full">
                <Reproductor />
            </div>
        </div>
    );
}
