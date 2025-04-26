import React from 'react';
import NavbarTab from '../elements/NavbarTab';

const tabs = [
  'Home',
  'Eventos',
  'Tienda y subasta',
  'Financiación colectiva',
  'Streaming'
];

export default function NavbarTabs() {
  return (
    <div className="flex justify-end items-center gap-6">
      {tabs.map(tab => <NavbarTab key={tab} label={tab} />)}
    </div>
  );
}