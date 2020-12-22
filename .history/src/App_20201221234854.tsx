import "./App.css";
import { utils } from "./modules/utils";
import { colors } from "./modules/constants";
import { useState } from "react";
import { PlayNumber } from "./components/PlayNumber";
import { StarsDisplay } from "./components/StarsDisplay";

const App = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState([1, 2, 3, 4, 5]);
  const [candidateNums, setCandidateNums] = useState([2, 3]);

  function numberStatus(number: number): any {
    if (availableNums.indexOf(number) === -1) {
      return 'used';
    }
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay stars={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber status={numberStatus(number)} number={number} />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default App;
