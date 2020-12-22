import "./App.css";
import { utils } from "./modules/utils";
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

    const newCandidateNumbers = currentStatus === "available" ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number );

    if(utils.sum(newCandidateNumbers) !== stars){
      setCandidateNums(newCandidateNumbers);
    }else{
      const newAvailableNums:number[] = availableNums.filter(n => !newCandidateNumbers.includes(n))
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums, 9))
    }

  }

  let gameIsDone = availableNums.length === 0 ? <PlayAgain/> :  (   <StarsDisplay stars={stars} />)

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {
          }
       
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
