import React, { useState } from "react";
import './App.css';
import GameButton from "./packages/GameButton";
import makeAiMove from "./packages/Helpers/MoveAi";

const App = () => {

  const [isCircle, setIsCircle] = useState(true);
  const [moves, setMoves] = useState([]);
  const [aiMove, setAiMove] = useState();


  // const createPositions = () => {
  //   let board = [];
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //     board.push({x: i, y: j})
  //     }
  //   }
  //   return board
  // }
  const createPositions = () => {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ x: i })
    }
    return board
  }


  const clickGameButton = data => {
    let actualMoves = moves;
    actualMoves.push(data);
    setMoves(actualMoves);
    if (isCircle) {
      setAiMove(makeAiMove(moves));
    }
    setIsCircle(!isCircle);
  }

  return (
    <div className="App">
      {createPositions().map((singlePosition, index) => (
        <GameButton positionX={singlePosition.x} buttonClick={clickGameButton}
          player={isCircle} aiMove={aiMove} key={index} />))}
    </div>
  );
}

export default App;
