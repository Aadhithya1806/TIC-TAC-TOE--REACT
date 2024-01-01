import { React, useState } from "react";

const Player = ({ initialPlayerName, playerSymbol, isActive, ...props }) => {
    const [playerName, setPlayerName] = useState(initialPlayerName);
    const [isEditing, setIsEditing] = useState(false);
    const editHandler = () => {
        setIsEditing((editing) => !editing);
    };
    // const saveHandler = () => {
    //     setIsEditing(false);
    // };
    const changeHandler = (event) => {
        setPlayerName(event.target.value);
    };
    let playerNameContent = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        playerNameContent = (
            <input type="text" value={playerName} onChange={changeHandler} />
        );
    }

    return (
        <li className={isActive ? "active" : undefined} {...props}>
            <span className="player">
                {playerNameContent}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={editHandler}>{isEditing ? "save" : "Edit"}</button>

            {/* {isEditing ? (
                <button onClick={saveHandler}>Save</button>
            ) : (
                <button onClick={editHandler}>Edit</button>
            )} */}
        </li>
    );
};

export default Player;
