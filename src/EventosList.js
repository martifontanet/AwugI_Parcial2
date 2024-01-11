import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';

const Eventos = () => {
    const [eventsList, setList] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/eventos-de-la-agenda-cultural-categorizados-y-geolocalizados/records?limit=20');
          const data = await response.json();
          setList(data.results);{/* Guardem els resultats de la api a una array amb State  */}
  
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="main">
        <div className='eventList'> {/* Creem un bucle per anar imprimint tots els resultats de la api */}
          {eventsList.map((event) => ( 
            <Link key={event.id_evento} className="link" to={`/event/${event.id_evento}`}>
              <EventCard id={event.id_evento} title={event.titulo} imageUrl={event.imagen_evento} date={event.fecha_inicio} />
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Eventos;