import React, { useState } from "react";
import './App.css';
import GameButton from "./packages/GameButton";
import makeAiMove from "./packages/Helpers/MoveAi";
import checkWin from "./packages/Helpers/WinLines";

const App = () => {

  const [isCircle, setIsCircle] = useState(true);
  const [moves, setMoves] = useState([]);
  const [aiMove, setAiMove] = useState();


  const createBoard = () => {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ x: i })
    }
    return board
  }

  const turnAi = (actualMoves) => {
    if (isCircle) {
      setAiMove(makeAiMove(moves));
    }
  }

  const changedPlayer = () => {
    setIsCircle(!isCircle);
  }

  const clickGameButton = data => {
    let actualMoves = moves;
    actualMoves.push(data);
    let win = checkWin( moves, data.player);
    if (!win) {
      setMoves(actualMoves);
      turnAi(actualMoves);
      changedPlayer();
    } else {

    }

  }

  return (
    <div className="App">
      {createBoard().map((singlePosition, index) => (
        <GameButton position={singlePosition.x} buttonClick={clickGameButton}
          player={isCircle} aiMove={aiMove} key={index} />))}
    </div>
  );
}

export default App;
