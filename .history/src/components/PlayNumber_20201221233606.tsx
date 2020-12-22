type PlayNumberProps = {
    number:number
}

function PlayNumber(props:PlayNumberProps){
    let {number} = props;

    function onClick(ev:MouseEvent){
        console.log(ev)
    }

    return (   
    <button key={number} onClick={onClick} className="number">
        {number}
    </button>)
}


export {PlayNumber}