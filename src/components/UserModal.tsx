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

export default function UserModal({ onClose }: UserModalProps): JSX.Element {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    logout();
    navigate('/login');
    onClose();
  };

  return (
    <div className="w-72 p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-4 shadow-xl">
      <div className="self-stretch inline-flex justify-start items-center gap-4">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
          <div className="text-black text-sm font-bold font-['Open_Sans'] leading-tight">
            Bienvenido de nuevo
          </div>
          <div className="text-black text-xs font-normal font-['Open_Sans'] leading-none">
            usuario@mail.com
          </div>
        </div>
        <img src={arrowFoward} alt="Flecha" className="w-6 h-6 cursor-pointer" onClick={onClose} />
      </div>

      {[userIcon, local_mall, ticket, premium, settings].map((icon, index) => (
        <div key={index} className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer">
          <img src={icon} alt="icon" className="w-6 h-6" />
          <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">Opción</div>
        </div>
      ))}

      <div className="self-stretch inline-flex justify-start items-center gap-4 cursor-pointer" onClick={handleLogout}>
        <img src={logoutIcon} alt="Cerrar sesión" className="w-6 h-6" />
        <div className="text-black text-sm font-normal font-['Open_Sans'] leading-tight">
          Cerrar sesión
        </div>
      </div>
    </div>
  );
}
