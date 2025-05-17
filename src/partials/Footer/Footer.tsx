import React from 'react';
import logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <div className="w-full py-20 bg-black flex flex-col justify-start items-center gap-16 overflow-hidden">
      <div className="w-[1280px] flex justify-between items-start">
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="w-28 h-12 relative">

              <img className="absolute left-0 top-0 w-28 h-12" src={logo} alt="Logo" />
            </div>
          </div>
          <div className="flex gap-8">
            {['Home', 'Eventos', 'Tienda', 'Crowdfunding', 'Contacto'].map((item) => (
              <div key={item} className="text-white text-base font-normal font-['Open_Sans'] leading-normal">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="w-72 text-right">
          <div className="text-white text-base font-normal font-['Open_Sans'] leading-normal">
            Nombre de la dirección número 0 calle 0 nombre colonia CP 000<br /><br />
          </div>
          <div className="text-amber-500 text-base font-normal font-['Open_Sans'] leading-normal">
            55+ 0000 00 00 00<br /><br />Info@mail.com
          </div>
        </div>
      </div>

      <div className="w-[1280px] flex flex-col justify-start items-center gap-8">
        <div className="w-full flex justify-between items-start">
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((item) => (
              <div key={item} className="text-white text-base font-normal font-['Open_Sans'] leading-normal">
                {item}
              </div>
            ))}
          </div>
          <div className="text-white text-base font-normal font-['Open_Sans'] leading-normal">
            2023 Groupie Ticket. Derechos reservados
          </div>
        </div>
      </div>
    </div>
  );
}