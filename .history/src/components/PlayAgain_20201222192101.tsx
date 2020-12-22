function PlayAgain(props:any){
    let {onClick, gameStatus} = props;
    return (
        <div onClick={onClick} className="game-done">
            <div className="message">
                {
                    gameStatus === "lost" ? "Game Over" : "Nice"
                }
            </div>
            <button>Play Again</button>
        </div>
    )
}


export {PlayAgain}