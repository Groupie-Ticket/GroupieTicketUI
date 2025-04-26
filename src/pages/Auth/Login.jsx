import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = () => {
    login();
    navigate('/');
  };

  const handleOmitir = () =>{
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>

      <button
        className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        onClick={handleOmitir}
      >        omitir
      </button>
    </div>
  );
}