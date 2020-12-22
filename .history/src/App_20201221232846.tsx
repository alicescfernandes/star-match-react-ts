import "./App.css";
import { utils } from "./modules/utils";
import { colors } from "./modules/constants";

const App = () => {
  const stars = utils.random(1,9);
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          
          {utils.range(0, stars).map((id) => {
            return <div key={id} className="star" />;
          })}
        </div>
        <div className="right">
          {utils.range(1, 9).map((id) => {
            return (
              <button key={id} className="number">
                1
              </button>
            );
          })}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default App;
