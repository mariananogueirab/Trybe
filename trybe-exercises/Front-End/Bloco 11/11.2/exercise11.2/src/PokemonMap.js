import React from 'react';
import Pokemons from './data';
import PokemonCard from './PokemonCard';

class PokemonMap extends React.Component {
  render() {
    return (
      <section className='sectionCard'>
        {Pokemons.map(({ name, type, averageWeight, image, id }) =>
        <PokemonCard key={id} name={name} type={type} weight={averageWeight.value} measurementUnit={averageWeight.measurementUnit} image={image} />
        )}
      </section>
    )
  }
}

export default PokemonMap;