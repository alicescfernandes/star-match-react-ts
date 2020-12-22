import { utils } from "../modules/utils";

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
}



export {useGameState}