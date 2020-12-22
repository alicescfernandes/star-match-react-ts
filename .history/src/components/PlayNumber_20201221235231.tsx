import { colors } from "../modules/constants";

type PlayNumberProps = {
  number: number;
  status: string;
};


function PlayNumber(props: PlayNumberProps) {
  let { number, status } = props;

  function onClick(ev: React.MouseEvent) {
    console.log(ev);
  }

  return (
    <button
      style={{ backgroundColor:colors[status]}}
      key={number}
      onClick={onClick}
      className="number"
    >
      {number}
    </button>
  );
}

export { PlayNumber };
