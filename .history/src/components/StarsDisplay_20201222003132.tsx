import { utils } from "../modules/utils";


function StarsDisplay(props: StarsDisplayProps) {
  let { stars } = props;
  return (
    <>
      {utils.range(1, stars).map((id) => {
        return <div key={Date.now()+"-s-"+id} className="star" />;
      })}
    </>
  );
}

export { StarsDisplay };
