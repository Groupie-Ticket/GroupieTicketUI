import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import NavbarTabs from '../../components/NavbarTabs';
import UserModal from '../../components/UserModal';

import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import diamond from '../../assets/diamond.svg';
import notifications from '../../assets/notifications.svg';
import local_mall from '../../assets/local_mall.svg';
import user from '../../assets/user.svg';

export default function Navbar() {
  const { isLoggedIn } = useAuthStore();
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isTransparent = location.pathname === '/' || location.pathname === '/events';

  return (
    <div
      className={`w-full h-20 px-20 inline-flex justify-start items-center top-0 left-0 
        ${isTransparent ? 'absolute z-50 bg-transparent' : 'bg-black'}`}
    >
      <div className="flex-1 self-stretch py-4 flex justify-start items-center gap-6">
        <img src={logo} alt="Logo" className="w-28 h-12 object-contain relative" />
        <div className="w-72 self-stretch px-4 py-2 bg-white rounded-lg flex justify-start items-center">
          <div className="flex-1 justify-center text-zinc-500 text-sm font-normal font-['Open_Sans'] leading-tight">
            Buscar evento
          </div>
          <img src={searchIcon} alt="Buscar" className="w-6 h-6" />
        </div>
        <div className="flex-1 flex justify-end items-center gap-6">
          <NavbarTabs />
          {isLoggedIn ? (
            <>
              <img src={diamond} alt="Diamond" className="w-6 h-6" />
              <img src={notifications} alt="Notifications" className="w-6 h-6" />
              <img src={local_mall} alt="Cart" className="w-6 h-6" />
              <img
                src={user}
                alt="User"
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
                onClick={() => setShowUserModal(!showUserModal)}
              />
            </>
          ) : (
            <>
              <div
                className="text-white text-base font-normal font-['Open_Sans'] leading-normal cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Inicia sesión
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-700 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer">
                <div className="text-center text-white text-base font-normal font-['Open_Sans'] leading-normal">
                  Regístrate
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {isLoggedIn && showUserModal && (
        <div className="absolute top-full right-20 z-50">
          <UserModal onClose={() => setShowUserModal(false)} />
        </div>
      )}
    </div>
  );
}