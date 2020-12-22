import { utils } from "../modules/utils";
import { useEffect, useState } from "react";

function useGameState() {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([] as number[]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  useEffect(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      let timerId = setTimeout(function () {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });


  if (utils.sum(newCandidateNumbers) !== stars) {
    setCandidateNums(newCandidateNumbers);
  } else {
    const newAvailableNums: number[] = availableNums.filter(
      (n) => !newCandidateNumbers.includes(n)
    );
    setStars(utils.randomSumIn(newAvailableNums, 9));
    setAvailableNums(newAvailableNums);
    setCandidateNums([]);
}



export {useGameState}