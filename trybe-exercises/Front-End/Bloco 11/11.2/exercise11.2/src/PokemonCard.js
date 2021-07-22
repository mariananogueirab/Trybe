import React from 'react';
import './PokemonCard.css'

class PokemonCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='cardElem'>
          <div className='cardInfos'>
            {this.props.name}
          </div>
          <div className='cardInfos'>
            {this.props.type}
          </div>
          <div className='cardInfos'>
            {`Average weight: ${this.props.weight} ${this.props.measurementUnit}`}
          </div>
      </div>
        <div className='cardInfos'>
          <img src={this.props.image} alt={`Foto do ${this.props.name}`} className='cardElem'/>
        </div>
      </div>
    )
  }
}

export default PokemonCard;