import React from 'react';

class Card extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{`Weigth: ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
    )      
  }
}

export default Card;