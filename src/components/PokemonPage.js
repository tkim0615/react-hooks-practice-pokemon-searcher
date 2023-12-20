import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const url = 'http://127.0.0.1:3001/pokemon'
function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

    const handleChange =(e) =>{
      setSearchTerm(e.target.value);
    }
    //filter pokemonarray by finding searchterm and name of pokemon...
    const filteredPokeArray = pokemon.filter(poke=> poke.name.toLowerCase().includes(searchTerm.toLowerCase()))


  useEffect(() =>{
    fetch(url)
    .then(res => res.json())
    .then(setPokemon)
  },[])

  const handleNewPokeSubmit =(newPoke) =>{
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke)
    })
      .then(res => res.json())
      .then(data=> setPokemon([...pokemon, data]))
  }

  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleSubmit={handleNewPokeSubmit} />
      <br />
      <Search searchTerm={searchTerm} handleChange={handleChange} />
      <br />
      <PokemonCollection pokemon={filteredPokeArray} />
    </Container>
  );
}

export default PokemonPage;
