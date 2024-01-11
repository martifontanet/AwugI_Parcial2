import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    return (
      <div className="card" id={`event_${this.props.id}`}>
          <img src={this.props.imageUrl} alt="charIMG"></img>
          <h3 className="cardH3">{`${this.props.title}`}</h3>
          <p className="cardP">Categoría: {`${this.props.categ}`}</p> 
          <p className="cardP">Temática: {`${this.props.tema}`}</p> 
          <p className="cardP"> Fecha de inicio: {`${this.props.date}`}</p>
          <p className="cardP"> Lugar de celebracion: {`${this.props.loc}`}</p>
          <p className="cardP"> Precio: {`${this.props.price}`}</p>
          <a className="cardP" href={this.props.link} target='_blank'> Enlace con más información </a>
          <article><div dangerouslySetInnerHTML={{ __html: this.props.descr }} /></article>
      </div>
    );
  }
}

export default EventCard;