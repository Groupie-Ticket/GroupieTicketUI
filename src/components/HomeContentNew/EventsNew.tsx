import React, { useState } from 'react';
import { getEvents } from '../../constants/events';
import EventCard from '../../elements/HomeContentNew/EventCard';

export default function EventsNew() {
    const [events] = useState<Event[]>(getEvents());

    return (
        <div className="self-stretch py-6 inline-flex flex-col justify-center items-center gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-black text-2xl font-bold font-['Open_Sans'] leading-9">
                Buscador
            </div>

            <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                <div className="w-44 h-12 px-4 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center">
                    <div className="flex-1 justify-center text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-tight">
                        Todo México
                    </div>
                </div>
                <div className="w-44 h-12 px-4 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center">
                    <div className="flex-1 justify-center text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-tight">
                        Todas las fechas
                    </div>
                </div>
                <div className="flex-1 h-12 px-4 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center">
                    <div className="flex-1 justify-center text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-tight">
                        Buscar por nombre del artista, evento, etc.
                    </div>
                </div>
                <div className="h-12 px-9 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg flex justify-start items-center gap-2.5 overflow-hidden">
                    <div className="text-center justify-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
                        Buscar
                    </div>
                </div>
            </div>

            <div className="self-stretch px-20 py-6 inline-flex justify-start items-center gap-4 flex-wrap content-center overflow-hidden">
                <div className="flex-1 flex justify-center items-center gap-2.5">
                    <div className="flex-1 justify-start text-black text-lg font-bold font-['Open_Sans'] leading-relaxed">
                        Recomendados
                    </div>
                    <div className="w-44 h-12 px-4 py-2 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex justify-start items-center">
                        <div className="flex-1 justify-center text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-tight">
                            Nuevos
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-start items-start gap-4 flex-wrap content-start">
                {events.map((event) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}