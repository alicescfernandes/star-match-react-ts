import { colors } from "../modules/constants";

function PlayNumber(props: PlayNumberProps) {
  let { number, status, onNumberClick } = props;

  return (
    <button
      style={{ backgroundColor:colors[status]}}
      key={number}
      onClick={onNumberClick}
      className="number"
    >
      {number}
    </button>
  );
}

export { PlayNumber };
