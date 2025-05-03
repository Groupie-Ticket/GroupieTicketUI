// src/pages/Compra/LayoutCompra.jsx
import React from 'react';
import NavBuy from './partials/NavBuy';
import FooterBuy from './partials/FooterBuy';
import Paso1 from './pasos/Paso1';
import Navbar from '../../partials/Navbar/Navbar';

export default function LayoutCompra() {
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
