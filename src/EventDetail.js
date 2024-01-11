import React, { useState, useEffect } from 'react';
import CardDetail from './CardDetail';
const EventDetails = ({ match }) => {
  const [Loading, setLoading] = useState(true);
  const [eventData, setData] = useState({});

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch(`https://analisis.datosabiertos.jcyl.es/api/explore/v2.1/catalog/datasets/eventos-de-la-agenda-cultural-categorizados-y-geolocalizados/records?where=id_evento%3D${match.params.event_Id}`);
        const data = await response.json();
        setData(data.results);
        setLoading(false); 
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchBeer();
  }, [match.params.event_Id]);

  return (
    <>

      {Loading ? (
        <p>Loading...</p>
      ) : (
        <>
        <h2>EVENT DETAIL PAGE</h2>
        <div className='detailPage'>
        {eventData.map((event) => (
            <CardDetail 
                id={event.id_evento} 
                title={event.titulo} 
                imageUrl={event.imagen_evento} 
                date={event.fecha_inicio} 
                descr={event.descripcion}
                tema={event.tematica}
                categ={event.categoria}
                loc={event.lugar_celebracion}
                price={event.precio}
                link={event.enlace_contenido}
            />
          ))}
        </div>
        </>
      )}
    </>
  );
};

export default EventDetails;