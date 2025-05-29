
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthModalProps {
  mode: 'login' | 'signup';
  onClose: () => void;
  onSwitchMode: (mode: 'login' | 'signup') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ mode, onClose, onSwitchMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Join Wanderlust'}
            </h2>
            <p className="text-gray-600">
              {mode === 'login' 
                ? 'Sign in to access your saved trips and preferences' 
                : 'Create an account to start your journey'
              }
            </p>
          </div>

          {mode === 'login' ? (
            <LoginForm onSwitchToSignup={() => onSwitchMode('signup')} />
          ) : (
            <SignupForm onSwitchToLogin={() => onSwitchMode('login')} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
