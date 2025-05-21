import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export default function AuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleAuthResponse, error } = useAuthStore();

  useEffect(() => {
    try {
      // Obtener el hash de la URL
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      
      // Mostrar los tokens en la consola
      console.log('Tokens en la URL:');
      console.log('Access Token:', params.get('access_token'));
      console.log('ID Token:', params.get('id_token'));
      console.log('Error:', params.get('error'));
      console.log('Error Description:', params.get('error_description'));

      const accessToken = params.get('access_token');
      const idToken = params.get('id_token');
      const error = params.get('error');
      const errorDescription = params.get('error_description');

      if (error) {
        console.error('Error en la autenticación:', error, errorDescription);
        navigate('/login', { 
          state: { error: errorDescription || 'Error en la autenticación' }
        });
        return;
      }

      if (!accessToken || !idToken) {
        console.error('No se recibieron los tokens necesarios');
        navigate('/login', { 
          state: { error: 'No se recibieron los tokens necesarios' }
        });
        return;
      }

      // Guardar los tokens en el store
      console.log('Intentando guardar tokens en el store...');
      handleAuthResponse(accessToken, idToken)
        .then(() => {
          console.log('Tokens guardados exitosamente');
          console.log('Estado actual del store:', useAuthStore.getState());
          navigate('/'); // Redirigir al home después del login exitoso
        })
        .catch((error) => {
          console.error('Error procesando la autenticación:', error);
          navigate('/login', { 
            state: { error: error.message || 'Error procesando la autenticación' }
          });
        });
    } catch (error) {
      console.error('Error en el callback:', error);
      navigate('/login', { 
        state: { error: 'Error procesando la respuesta de autenticación' }
      });
    }
  }, [navigate, handleAuthResponse]);

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