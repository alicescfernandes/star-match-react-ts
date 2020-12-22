import { colors } from "../modules/constants";

function PlayNumber(props: PlayNumberProps) {
  let { number, status, onNumberClick } = props;

  return (
    <button
      style={{ backgroundColor:colors[status]}}
      key={"n"+number}
      onClick={() => {
        onNumberClick(number, status);
      }}
      className="number"
    >
      {number}
    </button>
  );
}

export { PlayNumber };
