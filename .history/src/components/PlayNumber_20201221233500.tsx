type PlayNumberProps = {
    number:number
}


function PlayNumber(props:PlayNumberProps){
    let {number} = props;
    return (   
    <button key={id} className="number">
        {id}
    </button>)
}


export {PlayNumber}