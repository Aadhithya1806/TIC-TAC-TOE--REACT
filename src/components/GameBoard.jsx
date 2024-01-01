import React, { useState } from "react";

const initalGameTiles = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
const GameBoard = ({ onSelectSquare, activePlayer }) => {
    const [gameBoard, setGameBoard] = useState(initalGameTiles);
    const handleSelectTiles = (rowIndex, colIndex) => {
        setGameBoard((prevArray) => {
            const updatedBoard = [
                ...prevArray.map((innerArray) => [...innerArray]),
            ];
            updatedBoard[rowIndex][colIndex] = activePlayer;
            return updatedBoard;
        });
        onSelectSquare();
    };
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() =>
                                        handleSelectTiles(rowIndex, colIndex)
                                    }
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
