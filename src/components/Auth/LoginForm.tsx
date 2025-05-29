
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import SocialAuth from './SocialAuth';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        
        <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Forgot password?
        </button>
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-orange-600 transition-all disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </motion.button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <SocialAuth />

      <p className="text-center text-gray-600">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
