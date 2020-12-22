import "./App.css";
import { utils } from "./modules/utils";
import { useEffect, useState } from "react";
import { PlayNumber } from "./components/PlayNumber";
import { StarsDisplay } from "./components/StarsDisplay";
import { PlayAgain } from "./components/PlayAgain";
import { StarMatch } from "./components/StarMatch";


const Game = () => {
  const [key, setKey] = useState(1);

  function resetGame(){
    setKey(key+1);
  }

  return <StarMatch key={key} resetGame={resetGame}/>;
};

export default Game;
