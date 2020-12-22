type PlayNumberProps = {
  number: number;
  status: string;
  onNumberClick: (number:number, status:string) => void | undefined;
};

type colorsType = {
  [key: string]: string;
};

type StarsDisplayProps = {
  stars: number;
};
