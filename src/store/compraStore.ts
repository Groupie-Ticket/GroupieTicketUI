import { create } from 'zustand';

interface CompraStore {
    currentStep: number;
    setStep: (step: number) => void;
}

export const useCompraStore = create<CompraStore>((set) => ({
    currentStep: 1,
    setStep: (step) => set({ currentStep: step }),
}));
