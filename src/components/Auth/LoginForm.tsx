import { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';

export default function LoginForm() {
  const { signIn, isLoading, error } = useAuthStore();

  useEffect(() => {
    console.log('Iniciando proceso de autenticación...');
    signIn('', '');
  }, [signIn]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}
      <p className="text-center text-gray-600">
        Redirigiendo a la página de inicio de sesión...
      </p>
    </div>
  );
} 