import React from 'react';

export default function NavbarTab({ label, onClick }) {
  return (
    <div
      className="text-white text-base font-normal leading-normal cursor-pointer hover:underline"
      onClick={onClick}
    >
      {label}
    </div>
  );
}