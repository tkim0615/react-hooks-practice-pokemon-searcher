import React,{useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const url = 'http://127.0.0.1:3001/pokemon'
//Create an index displaying Pokemon 'cards' 
// - Render each Pokemon name, sprite, and hp in a card..oass diwn to collection then to card
function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);  

  useEffect(() =>{
    fetch(url)
     .then(response => response.json())
     .then(data => setPokemon(data))
  },[])
  
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemon={pokemon} />
    </Container>
  );
}

export default PokemonPage;
