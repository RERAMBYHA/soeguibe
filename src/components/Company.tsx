import React from 'react';
import { Factory, Target, Heart, Zap } from 'lucide-react';

const Company = () => {
  const values = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Producción Local",
      description: "Elaboramos nuestros productos en Guinea Ecuatorial desde 2004, apoyando la economía local."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Calidad Superior",
      description: "Medalla de platino en Monde Selection. Estándares internacionales con sabor local."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compromiso Social",
      description: "Responsabilidad social y ambiental en cada proceso. Cuidamos nuestra comunidad."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovación",
      description: "Constante evolución y mejora para ofrecer los mejores productos del mercado."
    }
  ];

  return (
    <section id="empresa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestra <span className="text-green-800">Empresa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soeguibe es líder en el mercado de bebidas en Guinea Ecuatorial, 
            parte del prestigioso grupo Castel BGI, comprometidos con la excelencia y la sostenibilidad.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Más de 20 años de <span className="text-green-800">tradición</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde nuestros inicios en 2004, Soeguibe se ha convertido en la cervecería de referencia 
              en Guinea Ecuatorial. Como filial del grupo Castel BGI, combinamos la experiencia 
              internacional con el conocimiento local para crear productos únicos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Con una producción que supera los 70 millones de botellas anuales y una cuota de 
              mercado del 80%, somos el motor de la industria cervecera nacional, generando empleo 
              para más de 250 familias ecuatoguineanas.
            </p>
            <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600">
              <p className="text-green-800 font-semibold">
                "Reducimos las importaciones en un 50% en 7 años, apostando por la producción local 
                y el desarrollo sostenible de nuestro país."
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg" 
              alt="Fábrica Soeguibe"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-green-600 mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;