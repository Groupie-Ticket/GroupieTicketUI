import { create } from 'zustand';

interface EventData {
    name: string;
    price: number;
    available: number;
    venue: string;
    location: string;
    datetime: string;
    image: string;
}

interface CompraStore {
    currentStep: number;
    eventData: EventData | null;
    quantity: number;
    setStep: (step: number) => void;
    setEventData: (data: EventData) => void;
    setQuantity: (quantity: number) => void;
}

export const useCompraStore = create<CompraStore>((set) => ({
    currentStep: 1,
    eventData: null,
    quantity: 1,
    setStep: (step) => set({ currentStep: step }),
    setEventData: (data) => set({ eventData: data }),
    setQuantity: (quantity) => set({ quantity }),
}));
