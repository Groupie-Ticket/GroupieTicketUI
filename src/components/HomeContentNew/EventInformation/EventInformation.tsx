import React from 'react';
import HeroInformation from '../../../elements/HomeContentNew/EventInformation/HeroInformation';
import EventDetail from '../../../elements/HomeContentNew/EventInformation/EventDetail';
import { useEventStore } from '../../../store/eventStore';

export default function EventInformation() {
    const event = useEventStore((state) => state.selectedEvent);

    if (!event) return <div className="text-center text-xl py-20">Evento no disponible</div>;

    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <HeroInformation
                image={event.image}
                venue={event.venue}
                location={event.location}
                artist={event.artist}
                datetime={event.datetime}
            />
            <EventDetail
                artist={event.artist}
                venue={event.venue}
                location={event.location}
                datetime={event.datetime}
            />
        </div>
    );
}
