import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function ConfirmSignUp() {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { confirmSignUp, isLoading } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  if (!email) {
    navigate('/register');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await confirmSignUp(email, code);
      // Si la confirmación es exitosa, redirigir al login
      navigate('/login', {
        state: { message: '¡Cuenta confirmada! Ahora puedes iniciar sesión.' }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en la confirmación');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Confirma tu cuenta
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Hemos enviado un código de confirmación a {email}. Por favor, ingresa el código para confirmar tu cuenta.
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="code" className="text-sm font-medium text-gray-700">
              Código de confirmación
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Ingresa el código"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading ? 'Confirmando...' : 'Confirmar cuenta'}
          </button>
        </form>
      </div>
    </div>
  );
} 