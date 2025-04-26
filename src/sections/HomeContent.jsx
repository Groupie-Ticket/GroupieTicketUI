// src/sections/HomeContent.jsx
import React from 'react';
import PopularArtists from '../components/PopularArtists';

export default function HomeContent() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <PopularArtists />
    </div>
  );
}
