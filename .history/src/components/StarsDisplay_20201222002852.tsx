import { utils } from "../modules/utils";


function StarsDisplay(props: StarsDisplayProps) {
  let { stars } = props;
  return (
    <>
      {utils.range(0, stars).map((id) => {
        return <div key={"s"+id} className="star" />;
      })}
    </>
  );
}

export { StarsDisplay };
