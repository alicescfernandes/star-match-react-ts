import "./App.css";
import { useState } from "react";
import { StarMatch } from "./components/StarMatch";

const Game = () => {
  const [key, setKey] = useState(1);

const resetGame = ()  => setKey(key + 1)

  return <StarMatch key={key} resetGame={resetGame} />;
};

export default Game;
