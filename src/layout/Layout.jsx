import React from 'react';
import Navbar from '../partials/Navbar/Navbar';
import Footer from '../partials/Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}