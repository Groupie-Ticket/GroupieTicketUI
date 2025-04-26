import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

import arrowFoward from '../assets/foward.svg';
import userIcon from '../assets/user.svg';
import local_mall from '../assets/local_mall.svg';
import ticket from '../assets/ticket.svg';
import premium from '../assets/premium.svg';
import settings from '../assets/settings.svg';
import logoutIcon from '../assets/logout.svg';

export default function UserModal({ onClose }) {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
        onClose();
    };

    return (
        <div className="w-72 p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 shadow-xl">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
                <div className="flex-1 inline-flex flex-col justify-start items-start">
                    <div className="text-black text-xs font-bold leading-none">Mi balance</div>
                    <div className="text-black text-base font-normal leading-normal">$0,000.00</div>
                </div>
                <img src={arrowFoward} className="w-6 h-6" alt="Perfil" />
            </div>


            <div className="self-stretch h-px bg-zinc-200" />

            <div className="self-stretch inline-flex items-center gap-2 cursor-pointer">
                <img src={userIcon} className="w-6 h-6" alt="Perfil" />
                <span className="text-black text-base">Perfil</span>
            </div>
            <div className="self-stretch inline-flex items-center gap-2 cursor-pointer">
                <img src={local_mall} className="w-6 h-6" alt="Mis compras" />
                <span className="text-black text-base">Mis compras</span>
            </div>
            <div className="self-stretch inline-flex items-center gap-2 cursor-pointer">
                <img src={ticket} className="w-6 h-6" alt="Mis ventas" />
                <span className="text-black text-base">Mis ventas</span>
            </div>
            <div className="self-stretch p-2.5 bg-black rounded-lg inline-flex items-center gap-2 cursor-pointer">
                <img src={premium} className="w-6 h-6" alt="Planes premium" />
                <span className="text-white text-base">Planes premium</span>
            </div>
            <div className="self-stretch inline-flex items-center gap-2 cursor-pointer">
                <img src={settings} className="w-6 h-6" alt="Configuraciones" />
                <span className="text-black text-base">Configuraciones</span>
            </div>

            <div className="self-stretch h-px bg-zinc-200" />

            <div
                className="self-stretch inline-flex items-center gap-2 cursor-pointer"
                onClick={handleLogout}
            >
                <img src={logoutIcon} className="w-6 h-6" alt="Cerrar sesión" />
                <span className="text-black text-base">Cerrar sesiones</span>
            </div>
        </div>
    );
}