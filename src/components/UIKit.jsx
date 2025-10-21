import React from 'react';
import { Link } from 'react-router-dom';

// Componente Header
export const Header = () => (
  <header className="bg-gray-800 shadow-md">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-400">
        Hortas Urbanas
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link>
        <Link to="/mapa" className="text-gray-300 hover:text-green-400 transition-colors">Mapa</Link>
        <Link to="/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
          Login
        </Link>
      </div>
    </nav>
  </header>
);

// Componente Footer
export const Footer = () => (
  <footer className="bg-gray-800 mt-8 py-4">
    <div className="container mx-auto text-center text-gray-400">
      <p>&copy; 2025 Hortas Urbanas. Projeto Acadêmico.</p>
    </div>
  </footer>
);

// Componente Card
export const Card = ({ children, className }) => (
  <div className={`bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

// Componente Input
export const Input = ({ type = 'text', placeholder, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
  />
);

// Componente Button
export const Button = ({ children, className, type = 'button' }) => (
  <button
    type={type}
    className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
  >
    {children}
  </button>
);

