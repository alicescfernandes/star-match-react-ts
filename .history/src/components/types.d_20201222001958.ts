let availableStatus = "used"|"wrong"|"candidate"|"available";

type PlayNumberProps = {
  number: number;
  status:availableStatus;
  onNumberClick: (number:number,availableStatus) => void | undefined;
};

type colorsType = {
  [key: string]: string;
};

type StarsDisplayProps = {
  stars: number;
};
