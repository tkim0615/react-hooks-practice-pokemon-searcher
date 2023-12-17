import React,{useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {


  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;






//1. make fetch, stateful data. pass down to poke collection and to card, map and index. poke's