type PlayNumberProps = {
  number: number;
  status: string;
  onClick:event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
};

type colorsType = {
  [key: string]: string;
};

type StarsDisplayProps = {
  stars: number;
};
