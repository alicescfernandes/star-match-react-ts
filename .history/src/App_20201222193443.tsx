import "./App.css";
import { StarMatch } from "./components/StarMatch";


const Game = () => {
  const [key, setKey] = useState(1);

  function resetGame(){
    setKey(key+1);
  }

  return <StarMatch key={key} resetGame={resetGame}/>;
};

export default Game;
