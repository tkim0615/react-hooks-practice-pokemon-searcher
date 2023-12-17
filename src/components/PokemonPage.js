import React,{useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchText, setSearchText] = useState('')
  const [pokemon, setPokemon] = useState([])
  const url = 'http://127.0.0.1:3001/pokemon'
  useEffect(() => {
    fetch(url)
      .then(resp=> resp.json())
      .then(setPokemon)
  }, [])

  const onHandleChange = (event) => {
    setSearchText(event.target.value)
    console.log(searchText)
  }

  const searchByName = pokemon.filter(poke =>{
    if(poke.name.toLowerCase().includes(searchText.toLowerCase())){
      return poke
  }})
  console.log(searchByName)
 
  const onHandleSubmit = (newData) =>{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(resp=> resp.json())
    .then(data =>{
      setPokemon([...pokemon, data])
    })
    
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleSubmit={onHandleSubmit}/>
      <br />
      <Search onHandleChange={onHandleChange} searchText={searchText}/>
      <br />
      <PokemonCollection pokemon={searchByName} />
    </Container>
  );
}

export default PokemonPage;
