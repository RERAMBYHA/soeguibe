import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <img 
                src="https://soeguibe.com/wp-content/uploads/2022/06/cropped-LOGO-SOEGUIBE-1-2048x503.png"
                alt="Soeguibe Logo"
                className="h-8 w-auto mb-4"
              
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Líder en la industria cervecera de Guinea Ecuatorial desde 2004. 
              Calidad local, responsabilidad global.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <Leaf className="w-5 h-5" />
              <span className="text-sm">Medalla de Platino - Monde Selection</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/empresa" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Nuestra Empresa
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/rsc" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  RSC
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Productos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Castel Beer</li>
              <li>33 Export</li>
              <li>Beaufort</li>
              <li>Agua Natural</li>
              <li>Refrescos Premium</li>
              <li>Energy Drink</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Carretera del Aeropuerto<br />
                  Malabo, Guinea Ecuatorial
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+240 333 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@soeguibe.gq</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-3">Síguenos</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Soeguibe - Sociedad Ecuatoguineana de Bebidas. Todos los derechos reservados.
              <br className="md:hidden" />
              <span className="block md:inline md:ml-2">Filial de Castel BGI</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Términos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;