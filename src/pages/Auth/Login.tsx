import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginForm from '../../components/Auth/LoginForm';

export default function Login() {
  const location = useLocation();
  const error = location.state?.error;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Iniciar sesión
        </h2>

        {error && (
          <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <LoginForm />

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 