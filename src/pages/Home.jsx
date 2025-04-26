import React from 'react';
import Hero from '../sections/Hero';
import HomeContent from '../sections/HomeContent';
import Reproductor from '../sections/Reproductor';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Hero />
      <Reproductor />
      <HomeContent />
    </div>
  );
}
