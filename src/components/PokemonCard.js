import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [fronts, setFront] = useState(true)
  const handleFlip = () =>{
    setFront(front=>!front)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleFlip} src={fronts? pokemon.sprites.front: pokemon.sprites.back } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
