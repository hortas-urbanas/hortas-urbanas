import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/UIKit.jsx';

// Importação dos componentes de página
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import MapPage from './pages/MapPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        {/* O Header e o Footer ficam fora do <Routes> para aparecerem em todas as páginas */}
        <Header />

        <main className="flex-grow container mx-auto p-4 md:p-8">
          <Routes>
            {/* Define cada rota da aplicação */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/mapa" element={<MapPage />} />
            {/* Adicionar outras rotas aqui conforme necessário */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  ); // <--- PARÊNTESE QUE FALTAVA
}

export default App;

