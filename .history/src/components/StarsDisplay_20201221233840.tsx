import { utils } from "./modules/utils";


function StarsDisplay(){
    return (
        <>
        {utils.range(0, stars).map((id) => {
            return <div key={id} className="star" />;
          })}
          </>
    )
}



export {StarsDisplay}