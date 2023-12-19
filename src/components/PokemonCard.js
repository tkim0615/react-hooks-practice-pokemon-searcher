import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const [isFront, setIsFront] = useState(true)

  return (
    <Card>
      <div>
        <div className="image">
          <img
           onClick={()=> setIsFront(!isFront)} 
          src={isFront? poke.sprites.front : poke.sprites.back}
          alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
