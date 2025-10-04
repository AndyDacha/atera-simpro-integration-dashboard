import React, { useState } from 'react';
import { Lock, Shield, Eye, EyeOff } from 'lucide-react';

const LoginForm = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = await onLogin(password);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen dacha-login-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 dacha-card rounded-full flex items-center justify-center mb-6 dacha-pulse-glow">
            <Shield className="h-10 w-10 dacha-icon" />
          </div>
          <h2 className="dacha-title text-4xl font-extrabold mb-2">
            Atera → simPRO V4
          </h2>
          <h3 className="dacha-subtitle text-xl font-semibold mb-4">
            Integration Dashboard
          </h3>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <Lock className="h-4 w-4" />
            <span className="text-sm font-medium">Internal Access Only</span>
          </div>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="dacha-card p-6 rounded-xl">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Access Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="appearance-none rounded-lg relative block w-full px-10 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm transition duration-200"
                  placeholder="Enter secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-orange-500 focus:outline-none transition duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-red-600 text-sm text-center font-medium">
                  {error}
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="dacha-btn-primary group relative w-full flex justify-center py-3 px-4 text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Shield className="h-5 w-5 mr-2" />
                    Access Dashboard
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-gray-400">
            © 2024 Dacha SSI - Veri Sae Integration System
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
