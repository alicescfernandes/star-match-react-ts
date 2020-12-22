type PlayNumberProps = {
  number: number;
  status: "used"|"wrong"|"candidate"|"available";
  onNumberClick: (number:number, status:"used"|"wrong"|"candidate"|"available") => void | undefined;
};

type colorsType = {
  [key: string]: string;
};

type StarsDisplayProps = {
  stars: number;
};
