import "./App.css";
import { utils } from "./modules/utils";
import { colors } from "./modules/constants";
import { useState } from "react";
import { PlayNumber } from "./components/PlayNumber";
import { StarsDisplay } from "./components/StarsDisplay";

const App = () => {

  let [stars, setStars] = useState(utils.random(1,9))

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay/>
        </div>
        <div className="right">
          {utils.range(1, 9).map((id) => {
            return (
              <PlayNumber number={id} />
            );
          })}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default App;
