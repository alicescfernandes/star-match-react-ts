import { utils } from "../modules/utils";
import { useEffect, useState } from "react";
import { PlayNumber } from "./PlayNumber";
import { StarsDisplay } from "./StarsDisplay";
import { PlayAgain } from "./PlayAgain";

const StarMatch = (props: any) => {
  const { resetGame } = props;

//   const [stars, setStars] = useState(utils.random(1, 9));
//   const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
//   const [candidateNums, setCandidateNums] = useState([] as number[]);
//   const [secondsLeft, setSecondsLeft] = useState(10);
//   const candidatesAreWrong = utils.sum(candidateNums) > stars;
//   const gameStatus =
//     availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

//   useEffect(() => {
//     if (secondsLeft > 0 && availableNums.length > 0) {
//       let timerId = setTimeout(function () {
//         setSecondsLeft(secondsLeft - 1);
//       }, 1000);
//       return () => clearTimeout(timerId);
//     }
//   });

  function numberStatus(number: number): any {
    if (!availableNums.includes(number)) {
      return "used";
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }

    return "available";
  }

  function onNumberClick(
    number: number,
    currentStatus: "used" | "wrong" | "candidate" | "available"
  ) {
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }

    const newCandidateNumbers =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    if (utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNums(newCandidateNumbers);
    } else {
      const newAvailableNums: number[] = availableNums.filter(
        (n) => !newCandidateNumbers.includes(n)
      );
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
      setStars(utils.randomSumIn(newAvailableNums, 9));
    }
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain gameStatus={gameStatus} onClick={resetGame} />
          ) : (
            <StarsDisplay stars={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <PlayNumber
              status={numberStatus(number)}
              number={number}
              onNumberClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export { StarMatch };
