import "./App.css";
import { utils } from "./modules/utils";
import { colors } from "./modules/constants";
import { useState } from "react";
import { PlayNumber } from "./components/PlayNumber";
import { StarsDisplay } from "./components/StarsDisplay";

const App = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  
  function numberStatus(number: number): any {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    
    return 'available'
  }

  function onNumberClick(number:number, currentStatus:"used"|"wrong"|"candidate"|"available"){
    debugger;
    if(currentStatus === "used"){
      return
    }

    const newCandidateNumbers = candidateNums.concat(number);

    if(utils.sum(newCandidateNumbers) !== stars){
      setCandidateNums(newCandidateNumbers);
    }else{
      const newAvailableNums:number[] = availableNums.filter(number => !availableNums.includes(n))
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(availableNums, 9))
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
            <PlayNumber status={numberStatus(number)} number={number} onNumberClick={onNumberClick}/>
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default App;
