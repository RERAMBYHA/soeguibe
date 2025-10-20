import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const upcomingEvents = [
    {
      title: "Festival de la Cerveza Artesanal",
      date: "2024-02-15",
      time: "18:00",
      location: "Plaza Central, Malabo",
      description: "Celebración anual con degustación de nuestras mejores cervezas y música local",
      attendees: 500,
      type: "Festival"
    },
    {
      title: "Lanzamiento Producto Nuevo",
      date: "2024-02-28",
      time: "19:30",
      location: "Hotel Sofitel, Malabo",
      description: "Presentación exclusiva de nuestra nueva línea de bebidas tropicales",
      attendees: 150,
      type: "Lanzamiento"
    },
    {
      title: "Jornada de Reciclaje Comunitario",
      date: "2024-03-10",
      time: "09:00",
      location: "Diversos barrios de Malabo",
      description: "Actividad de responsabilidad social para promover el reciclaje",
      attendees: 300,
      type: "RSC"
    }
  ];

  const pastEvents = [
    {
      title: "Celebración 20 Años",
      date: "2024-01-15",
      description: "Evento conmemorativo de nuestros 20 años de historia en Guinea Ecuatorial"
    },
    {
      title: "Copa Soeguibe 2023",
      date: "2023-12-10",
      description: "Torneo de fútbol comunitario patrocinado por Soeguibe"
    },
    {
      title: "Feria Internacional de Bebidas",
      date: "2023-11-20",
      description: "Participación en la feria internacional con nuestros productos premium"
    }
  ];

  const galleryImages = [
    "https://soeguibe.com/wp-content/uploads/2025/05/Captura-de-pantalla-2025-05-27-a-las-16.18.10-1350x673.png",
    "https://soeguibe.com/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-16-a-las-16.55.59-1536x1527.png",
    "https://soeguibe.com/wp-content/uploads/2025/04/Captura-de-pantalla-2025-04-17-a-las-17.05.16-1350x896.png",
    "https://soeguibe.com/wp-content/uploads/2023/04/2.jpg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Festival': return 'bg-purple-100 text-purple-800';
      case 'Lanzamiento': return 'bg-blue-100 text-blue-800';
      case 'RSC': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="eventos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-800">Eventos</span> y Actividades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Únete a nosotros en nuestros eventos especiales, lanzamientos de productos 
            y actividades comunitarias que fortalecen los lazos con Guinea Ecuatorial.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Próximos <span className="text-green-800">Eventos</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-20">
          
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={galleryImages[currentImageIndex]}
                alt={`Evento ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Eventos <span className="text-green-800">Pasados</span>
          </h3>
          
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-green-600 pl-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-bold text-gray-900">
                    {event.title}
                  </h4>
                  <span className="text-green-600 font-semibold">
                    {formatDate(event.date)}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;