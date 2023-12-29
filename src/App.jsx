import Player from "./components/Player";
function App() {
    return (
        <div id="game-container">
            <ol id="players">
                <Player initialPlayerName="Player 1" playerSymbol="X"></Player>
                <Player initialPlayerName="Player 2" playerSymbol="O"></Player>
            </ol>
        </div>
    );
}

export default App;
