import { utils } from "../modules/utils";
import { useEffect, useState } from "react";
import { PlayNumber } from "./PlayNumber";
import { StarsDisplay } from "./StarsDisplay";
import { PlayAgain } from "./PlayAgain";
import { useGameState } from "../hooks/useGameState";

const StarMatch = (props: any) => {
    const { resetGame } = props;
    const {
        stars,
        availableNums,
        candidateNums,
        secondsLeft,
        setGameState
      } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

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

    // if (utils.sum(newCandidateNumbers) !== stars) {
    //   setCandidateNums(newCandidateNumbers);
    // } else {
    //   const newAvailableNums: number[] = availableNums.filter(
    //     (n) => !newCandidateNumbers.includes(n)
    //   );
    //   setStars(utils.randomSumIn(newAvailableNums, 9));
    //   setAvailableNums(newAvailableNums);
    //   setCandidateNums([]);


    setGameState(newAvailableNums)
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
