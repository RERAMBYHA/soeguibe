import React from 'react';
import { Recycle, Leaf, Users, Award, ArrowRight } from 'lucide-react';

const RSC = () => {
  const initiatives = [
    {
      icon: <Recycle className="w-12 h-12" />,
      title: "Reciclaje Avanzado",
      description: "Programa integral de reciclaje de botellas de vidrio y cajas plásticas",
      impact: "95% de material reciclado",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Producción Sostenible",
      description: "Reducción de importaciones y promoción de la economía circular local",
      impact: "-50% importaciones en 7 años",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Impacto Social",
      description: "Generación de empleo local y apoyo a comunidades durante crisis",
      impact: "250+ empleos directos",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Calidad Certificada",
      description: "Estándares internacionales con medalla de platino Monde Selection",
      impact: "Certificación de excelencia",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const projects = [
    {
      title: "Expansión Logística Sostenible",
      description: "Nuevas instalaciones con tecnología verde y eficiencia energética",
      timeline: "2024-2025",
      status: "En desarrollo"
    },
    {
      title: "Energías Renovables",
      description: "Transición hacia fuentes de energía más limpias y sostenibles",
      timeline: "2024-2026",
      status: "Planificación"
    },
    {
      title: "Nuevos Productos Locales",
      description: "Desarrollo de bebidas con ingredientes nativos de Guinea Ecuatorial",
      timeline: "2024",
      status: "Investigación"
    }
  ];

  return (
    <section id="rsc" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-800">Responsabilidad</span> Social y Ambiental
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestro compromiso va más allá de producir las mejores bebidas. Trabajamos por un futuro 
            sostenible para Guinea Ecuatorial, cuidando el medio ambiente y fortaleciendo nuestras comunidades.
          </p>
        </div>

        {/* Main Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 ${initiative.color} rounded-full flex items-center justify-center mb-6`}>
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {initiative.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {initiative.description}
              </p>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="text-green-800 font-semibold text-sm">
                  {initiative.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              <span className="text-green-800">Impacto</span> Ambiental
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desde nuestros inicios, hemos implementado prácticas sostenibles que minimizan nuestro 
              impacto ambiental. Nuestro sistema de reciclaje avanzado nos permite reutilizar el 95% 
              de nuestros materiales de envase.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">95%</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Material Reciclado</div>
                  <div className="text-gray-600 text-sm">Botellas de vidrio y cajas plásticas</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">-50%</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Reducción Importaciones</div>
                  <div className="text-gray-600 text-sm">En los últimos 7 años</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">70M+</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Producción Anual</div>
                  <div className="text-gray-600 text-sm">Botellas fabricadas localmente</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg"
              alt="Sostenibilidad ambiental"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Future Projects */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Proyectos <span className="text-green-800">Futuros</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'En desarrollo' ? 'bg-green-100 text-green-800' :
                    project.status === 'Planificación' ? 'bg-blue-100 text-blue-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.timeline}</span>
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSC;