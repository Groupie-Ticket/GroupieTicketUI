import { useEventStore } from '../../../store/eventStore';
import BuyTicketEventInformation from '../../buttons/BuyTicketEventInformation';

export default function EventDetail() {
    const event = useEventStore((state) => state.selectedEvent);
    if (!event) return null;

    return (
        <div className="flex bg-white flex-col items-center w-full">
            <div className="w-[1064px] py-8 flex flex-col items-center gap-4">
                <div className="text-black text-2xl font-bold leading-9 self-stretch">Información del evento</div>
                <div className="text-black text-base font-normal leading-normal self-stretch">
                    {event.description}
                </div>
                <div className="h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-zinc-200"></div>
            </div>

            <div className="w-[1064px] py-8 flex flex-col items-center gap-4">
                <div className="text-black text-2xl font-bold leading-9 self-stretch">Observaciones</div>
                <div
                    className="self-stretch justify-start text-black text-base font-normal font-['Open_Sans'] leading-normal"
                    dangerouslySetInnerHTML={{ __html: event.notes }}
                />

                <div className="h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-zinc-200"></div>
            </div>

            <div className="w-[1064px] py-8 flex flex-col items-center gap-4">
                <div className="text-black text-2xl font-bold leading-9 self-stretch">¿Cómo llegar?</div>
                <div className="text-black text-base font-normal leading-normal self-stretch">
                    {event.location}
                </div>
                <iframe
                    src={event.mapEmbedUrl}
                    width="100%"
                    height="288"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                />
                <div className="h-0 self-stretch outline outline-1 outline-offset-[-0.50px] outline-zinc-200"></div>
            </div>

            <BuyTicketEventInformation
                name={event.artist}
                price={event.price}
                available={event.availableTickets}
                venue={event.venue}
                location={event.location}
                datetime={event.datetime}
                image={event.image}
            />
        </div>
    );
}
