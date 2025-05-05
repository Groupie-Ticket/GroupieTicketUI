// src/pages/Compra/LayoutCompra.tsx
import React from 'react';
import NavBuy from './partials/NavBuy';
import FooterBuy from './partials/FooterBuy';
import Paso1 from './pasos/Paso1';

export default function LayoutCompra(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col justify-between">
      <NavBuy />
      <main className="flex-1 px-20 py-10">
        <Paso1 />
      </main>
      <FooterBuy />
    </div>
  );
}
