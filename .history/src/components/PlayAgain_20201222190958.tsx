function PlayAgain(props:any){
    let {onClick} = props;
    return (
        <div onClick={onClick} className="game-done">
            <button>Play Again</button>
        </div>
    )
}


export {PlayAgain}