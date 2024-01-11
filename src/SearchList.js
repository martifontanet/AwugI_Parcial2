import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
const SearchResults = ({match}) => {
  const [eventsList, setList] = useState([]);
  const searchTerm = match.params.searchTerm;
  
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(`https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/eventos-de-la-agenda-cultural-categorizados-y-geolocalizados/records?where=search(titulo%2C%20%22${searchTerm}%22)`);
        const data = await response.json();
        setList(data.results);

      } catch (error) {
        console.error(error);
      }
    };

    fetchSearch();
  }, [searchTerm]);

  return (
    <div className="ListPage SearchPage">
        <h3>Search PAGE</h3>
      <h2>Search term: {searchTerm}</h2>
      <div>
        <div className="charList">
        
        {eventsList.map((event) => (
            <Link key={event.id_evento} className="link" to={`/event/${event.id_evento}`}>
              <EventCard id={event.id_evento} title={event.titulo} imageUrl={event.imagen_evento} date={event.fecha_inicio} />
            </Link>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default SearchResults;