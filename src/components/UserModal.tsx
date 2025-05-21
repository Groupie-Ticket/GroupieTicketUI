import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

import arrowFoward from '../assets/foward.svg';
import userIcon from '../assets/user.svg';
import local_mall from '../assets/local_mall.svg';
import ticket from '../assets/ticket.svg';
import premium from '../assets/premium.svg';
import settings from '../assets/settings.svg';
import logoutIcon from '../assets/logout.svg';

interface UserModalProps {
  onClose: () => void;
}

export default function UserModal({ onClose }: UserModalProps) {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
      onClose();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="w-72 p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 shadow-xl">
      <div className="self-stretch inline-flex justify-start items-center gap-4">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div className="text-black text-sm font-bold font-['Open_Sans'] leading-tight">
            {user?.name || 'Usuario'}
          </div>
          <div className="text-black text-xs font-normal font-['Open_Sans'] leading-none">
            {user?.email || 'usuario@mail.com'}
          </div>
        </div>
        <img src={arrowFoward} alt="Flecha" className="w-6 h-6 cursor-pointer" onClick={onClose} />
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer">
        <img src={userIcon} alt="Perfil" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">Mi Perfil</div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer">
        <img src={local_mall} alt="Compras" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">Mis Compras</div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer">
        <img src={ticket} alt="Tickets" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">Mis Tickets</div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer">
        <img src={premium} alt="Premium" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">Premium</div>
      </div>

      <div className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer">
        <img src={settings} alt="Configuración" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">Configuración</div>
      </div>

      <div 
        className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer"
        onClick={handleLogout}
      >
        <img src={logoutIcon} alt="Cerrar sesión" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">
          Cerrar sesión
        </div>
      </div>
    </div>
  );
}
