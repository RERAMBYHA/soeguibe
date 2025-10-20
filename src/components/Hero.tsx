import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Award, Leaf, Users } from 'lucide-react';




  const images = [
  "https://soeguibe.com/wp-content/uploads/2025/01/TOP-PINA-50CL-PAGINA-scaled.jpg",
  "https://soeguibe.com/wp-content/uploads/2025/01/PANEL-GIN-TONIC-PAGINA-scaled.jpg",
  "https://soeguibe.com/wp-content/uploads/2023/11/VALLA-1X2MT-33-EXPORT-01-scaled.jpg",
  "https://soeguibe.com/wp-content/uploads/2022/11/CHILL-PAGINA-WEB.jpg",
  "https://soeguibe.com/wp-content/uploads/2022/05/PAGINA-WORLD-COLA-50CL-01-scaled.jpg"
];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}

   <div className="absolute inset-0">
        {images.map((url, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.7), rgba(46, 125, 50, 0.7)), url(${url})`,
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i === currentIndex ? 0 : -1,
            }}
          />
        ))}
      </div>
     

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Sabor Auténtico</span>
            <span className="block text-green-200">Guinea Ecuatorial</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-green-100 mb-8 max-w-2xl leading-relaxed">
            Desde 2004, elaboramos con orgullo las mejores cerveza y bebidas de África Central. 
            Calidad local, responsabilidad global.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-green-200">Cuota de Mercado</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">70M+</div>
                <div className="text-green-200">Botellas/Año</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-3 rounded-full">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">250+</div>
                <div className="text-green-200">Empleados Locales</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/productos"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
            >
              Descubrir Productos
            </Link>
            <Link 
              to="/empresa"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
            >
              Nuestra Historia
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;