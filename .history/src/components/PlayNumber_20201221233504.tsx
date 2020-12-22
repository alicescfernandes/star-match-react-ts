type PlayNumberProps = {
    number:number
}


function PlayNumber(props:PlayNumberProps){
    let {number} = props;
    return (   
    <button key={number} className="number">
        {number}
    </button>)
}


export {PlayNumber}