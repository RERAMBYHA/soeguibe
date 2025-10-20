import React, { useState } from 'react';
import { Droplets, Award, Star } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('cervezas');

  const products = {
    cervezas: [
      {
        name: "Castel Beer",
        description: "Cerveza rubia de calidad premium, refrescante y equilibrada",
        image: "https://th.bing.com/th/id/OIP.FGBhoyMgWBzBF0ZTP-ppdgAAAA?w=190&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        abv: "5.2%",
        format: "330ml, 650ml",
        features: ["Medalla de Oro", "Sabor Equilibrado", "Producción Local"]
      },
      {
        name: "33 Export",
        description: "Cerveza de exportación con cuerpo y carácter distintivo",
        image: "https://th.bing.com/th/id/OIP.H8WOrRWYYA59kb9C3mgGMgAAAA?w=243&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        abv: "5.5%",
        format: "330ml, 650ml",
        features: ["Sabor Intenso", "Tradición", "Calidad Premium"]
      },
      {
        name: "Dopel Munich",
        description: "Cerveza artesanal con notas maltosas y aroma distintivo",
        image: "https://th.bing.com/th/id/OIP.CbPIvjlLPSu5lbpckjeRCwHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        abv: "4.8%",
        format: "330ml",
        features: ["Artesanal", "Notas Maltosas", "Edición Limitada"]
      }
    ],
    bebidas: [
      {
        name: "Agua Natural",
        description: "Agua pura de manantiales locales, embotellada con tecnología avanzada",
        image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
        abv: "0%",
        format: "500ml, 1.5L",
        features: ["100% Natural", "Sin Gas", "Pureza Garantizada"]
      },
      {
        name: "WORLD COLA",
        description: "Gama completa de refrescos con sabores tropicales únicos",
        image: "https://th.bing.com/th/id/OIP.voSiAKX6MJ1sdKeHk08jyQHaDt?w=349&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        abv: "0%",
        format: "330ml, 500ml",
        features: ["Sabores Locales", "Sin Conservantes", "Refrescante"]
      },
      {
        name: "TOP POMELO",
        description: "Bebida energética con ingredientes naturales y vitaminas",
        image: "https://images.pexels.com/photos/9990022/pexels-photo-9990022.jpeg",
        abv: "0%",
        format: "250ml",
        features: ["Energizante", "Vitaminas B", "Cafeína Natural"]
      }
    ]
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-green-800">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra gama completa de cervezas y bebidas, elaboradas con los más altos 
            estándares de calidad y el auténtico sabor de Guinea Ecuatorial.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveCategory('cervezas')}
              className={`px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 ${
                activeCategory === 'cervezas'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Cervezas
            </button>
            <button
              onClick={() => setActiveCategory('bebidas')}
              className={`px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 ${
                activeCategory === 'bebidas'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Bebidas gaseosas
            </button>
            
          
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.abv}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Droplets className="w-4 h-4 mr-2" />
                  <span>Formatos: {product.format}</span>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-green-600 mr-2 fill-current" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-100 px-8 py-4 rounded-full">
            <Award className="w-8 h-8 text-green-600 mr-3" />
            <div className="text-left">
              <div className="text-green-800 font-bold text-lg">Medalla de Platino</div>
              <div className="text-green-600">Monde Selection - Calidad Internacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;