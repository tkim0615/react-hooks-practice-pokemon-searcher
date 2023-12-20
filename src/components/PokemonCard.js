import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {
  const [isFront, setIsFront] = useState(true);
  const handleClick = () =>{
    setIsFront(!isFront);
  }

  return (
    <Card onClick={handleClick} >
      <div >
        <div className="image">
          <img src={isFront? poke.sprites.front: poke.sprites.back}alt={poke.name} />
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
