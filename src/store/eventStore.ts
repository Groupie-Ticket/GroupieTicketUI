import { create } from 'zustand';

interface Event {
    id: number;
    image: string;
    venue: string;
    artist: string;
    location: string;
    datetime: string;
    song: {
        title: string;
        url: string;
    };
}

interface EventStore {
    selectedEvent: Event | null;
    setSelectedEvent: (event: Event) => void;
    clearEvent: () => void;
}

export const useEventStore = create<EventStore>((set) => ({
    selectedEvent: null,
    setSelectedEvent: (event) => {set({ selectedEvent: event })
    console.log(event);
},
    clearEvent: () => set({ selectedEvent: null }),
}));
