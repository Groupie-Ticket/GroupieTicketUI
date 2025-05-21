import { create } from 'zustand';

interface Event {
    id: number;
    venue: string;
    artist: string;
    location: string;
    datetime: string;
    image: string;
    song: {
        title: string;
        url: string;
    };
    description: string;
    notes: string;
    mapEmbedUrl: string;
    price: number;
    availableTickets: number;
}

interface EventStore {
    selectedEvent: Event | null;
    setSelectedEvent: (event: Event) => void;
    clearEvent: () => void;
}

export const useEventStore = create<EventStore>((set) => ({
    selectedEvent: null,
    setSelectedEvent: (event) => {
        set({ selectedEvent: event });
        console.log(event);
    },
    clearEvent: () => set({ selectedEvent: null }),
}));
