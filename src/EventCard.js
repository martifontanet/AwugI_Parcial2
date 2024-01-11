import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    return (
      <div className="card" id={`beer_${this.props.id}`}>
          <img src={this.props.imageUrl} alt="charIMG"></img>
          <h3 className="cardH3">{`${this.props.title}`}</h3>
          <p className="cardP">{`${this.props.date}`}</p> 
      </div>
    );
  }
}

export default EventCard;