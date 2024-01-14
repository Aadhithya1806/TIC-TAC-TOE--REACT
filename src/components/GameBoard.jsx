import React, { useState } from "react";

const GameBoard = ({ onSelectSquare, board }) => {
  // const [gameBoard, setGameBoard] = useState(initalGameTiles);
  // const handleSelectTiles = (rowIndex, colIndex) => {
  // setGameBoard((prevArray) => {
  // const updatedBoard = [
  // ...prevArray.map((innerArray) => [...innerArray]),
  // ];
  // updatedBoard[rowIndex][colIndex] = activePlayer;
  // return updatedBoard;
  // });
  // onSelectSquare();
  // };
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol != null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
