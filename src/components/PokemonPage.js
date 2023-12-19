import React,{useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
const url='http://127.0.0.1:3001/pokemon'
function PokemonPage() {
  const [pokemon, setPokemon] =useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(url)
      .then(r=>r.json())
      .then(pokemon=>setPokemon(pokemon))
  },[])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const pokeSearchResult = pokemon.filter(poke=>{
    if(poke.name.toLowerCase().includes(query.toLowerCase())){
      return true
    }
  })

  const onHandleSubmit = (newPokeData) =>{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokeData)
    })
    .then(r=>r.json())
    .then(newPokeData => setPokemon([...pokemon, newPokeData]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleSubmit={onHandleSubmit} />
      <br />
      <Search query={query}handleChange={handleChange}/>
      <br />
      <PokemonCollection pokemon={pokeSearchResult}/>
    </Container>
  );
}

export default PokemonPage;
