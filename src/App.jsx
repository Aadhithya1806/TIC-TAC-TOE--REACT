import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./GameOver";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combos";
const initialGameTiles = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const players = {
  X: "Player1",
  O: "Player2",
};

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};
function App() {
  const [player, setPlayer] = useState(players);
  const handlePlayerNameChange = (sym, newName) => {
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [sym]: newName,
      };
    });
  };
  const [gameTurns, setGameTurns] = useState([]);
  let winner = null;
  let activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = [...initialGameTiles.map((arr) => [...arr])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  for (const combos of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combos[0].row][combos[0].column];
    const secondSquare = gameBoard[combos[1].row][combos[1].column];
    const thirdSquare = gameBoard[combos[2].row][combos[2].column];
    console.log(firstSquare);
    console.log(secondSquare);
    console.log(thirdSquare);
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = player[firstSquare];
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  const handleActivePlayer = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      // console.log(currentPlayer);
      return updatedTurns;
    });
  };
  const restartHandler = () => setGameTurns([]);
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          initialPlayerName="Player 1"
          playerSymbol="X"
          onChangeName={handlePlayerNameChange}
          isActive={activePlayer === "X"}
        ></Player>
        <Player
          initialPlayerName="Player 2"
          playerSymbol="O"
          isActive={activePlayer === "O"}
          onChangeName={handlePlayerNameChange}
        ></Player>
      </ol>
      {(hasDraw || winner) && (
        <GameOver winner={winner} onRestart={restartHandler} />
      )}
      <GameBoard
        onSelectSquare={handleActivePlayer}
        board={gameBoard}
        // activePlayer={activePlayer}
      ></GameBoard>
      {/* <Log turns={gameTurns}></Log> */}
    </div>
  );
}

export default App;
