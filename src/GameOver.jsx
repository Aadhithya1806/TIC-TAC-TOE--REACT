import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Draw Match!</p>}

      <button onClick={onRestart}>Rematch</button>
    </div>
  );
};

export default GameOver;
