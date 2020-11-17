import React, { useState } from "react";
import './App.css';
import GameButton from "./packages/GameButton";
import makeAiMove from "./packages/Helpers/MoveAi";

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

  const turnAi = () => {
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
    setMoves(actualMoves);
    checkWin(data.player);
    turnAi();
    changedPlayer();
    
  }

  const winLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

  const checkWin = (gamer) => {    
    let playerMoves = moves.filter(move => move.player === gamer ).map(move => move.position).sort();
   
    let gameWon =null;
    for (let [index, win] of winLines.entries()) {
      if (win.every(elem => playerMoves.indexOf(elem) > -1)) {
        gameWon = { index: index, player: gamer };
        console.log(gameWon);
        break;
      }
    }
    return gameWon;
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
