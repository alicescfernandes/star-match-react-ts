import { utils } from "../modules/utils";

type StarsDisplayProps = {
    stars:number
}

function StarsDisplay(props){
    let {stars} = props;
    return (
        <>
        {utils.range(0, stars).map((id) => {
            return <div key={id} className="star" />;
          })}
          </>
    )
}



export {StarsDisplay}