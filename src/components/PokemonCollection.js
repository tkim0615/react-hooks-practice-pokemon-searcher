import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  const pokemonCardElement = pokemon.map(eachPoke =>{
    return <PokemonCard key={eachPoke.id} pokemon={eachPoke} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCardElement}
    </Card.Group>
  );
}

export default PokemonCollection;
