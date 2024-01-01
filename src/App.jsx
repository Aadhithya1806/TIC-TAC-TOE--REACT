import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
function App() {
    const [activePlayer, setActivePlayer] = useState("X");
    const handleActivePlayer = () => {
        setActivePlayer((curActivePlayer) =>
            curActivePlayer === "X" ? "O" : "X"
        );
    };
    return (
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player
                    initialPlayerName="Player 1"
                    playerSymbol="X"
                    isActive={activePlayer === "X"}
                ></Player>
                <Player
                    initialPlayerName="Player 2"
                    playerSymbol="O"
                    isActive={activePlayer === "O"}
                ></Player>
            </ol>
            <GameBoard
                onSelectSquare={handleActivePlayer}
                activePlayer={activePlayer}
            ></GameBoard>
        </div>
    );
}

export default App;
