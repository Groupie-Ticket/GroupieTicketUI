import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function AuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleAuthResponse, error } = useAuthStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');
    const errorDescription = params.get('error_description');

    if (error || !code || !state) {
      console.error('Error en la autenticación:', error, errorDescription);
      navigate('/login', { 
        state: { error: errorDescription || 'Error en la autenticación' }
      });
      return;
    }

    handleAuthResponse(code, state)
      .then(() => {
        navigate('/'); // Redirigir al home después del login exitoso
      })
      .catch((error) => {
        console.error('Error procesando la autenticación:', error);
        navigate('/login', { 
          state: { error: error.message || 'Error procesando la autenticación' }
        });
      });
  }, [navigate, handleAuthResponse, location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-gray-600">Procesando autenticación...</p>
          {error && (
            <p className="mt-2 text-red-600">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
} 