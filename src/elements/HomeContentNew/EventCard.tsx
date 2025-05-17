import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEventStore } from '../../store/eventStore';

interface EventCardProps {
    id: number;
    image: string;
    venue: string;
    artist: string;
    location: string;
    datetime: string;
}

export default function EventCard(props: EventCardProps) {
    const { setSelectedEvent } = useEventStore();
    const navigate = useNavigate();

    const handleClick = () => {
        setSelectedEvent(props);
        navigate('/event');
    };

    return (
        <div
            onClick={handleClick}
            className="w-96 inline-flex flex-col justify-start items-start gap-2 cursor-pointer"
        >
            <img className="self-stretch h-60" src={props.image} alt={props.artist} />
            <div className="self-stretch text-black text-base font-semibold font-['Open_Sans'] leading-normal">
                {props.venue}
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="text-black text-xl font-bold font-['Open_Sans'] leading-loose">
                    {props.artist}
                </div>
                <div className="text-black text-base font-normal font-['Open_Sans'] leading-normal">
                    {props.location}
                </div>
            </div>
            <div className="self-stretch text-zinc-900 text-sm font-normal font-['Open_Sans'] leading-tight">
                {props.datetime}
            </div>
        </div>
    );
}
