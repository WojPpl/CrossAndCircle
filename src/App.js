import React, { useState } from "react";
import './App.css';
import GameButton from "./packages/GameButton";
import makeAiMove from "./packages/Helpers/MoveAi";

const App = () => {

  const [isCircle, setIsCircle] = useState(true);
  const [moves, setMoves] = useState([]);
  const [aiMove, setAiMove] = useState();


  const createPositions = () => {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ x: i })
    }
    return board
  }

  // const turnAi = () =>{
  //   if (isCircle) {
  //     setAiMove(makeAiMove(moves));
  //   }
  // }

  const clickGameButton = data => {
    let actualMoves = moves;
    actualMoves.push(data);
    setMoves(actualMoves);
    if (isCircle) {
      setAiMove(makeAiMove(moves));
    }
   // turnAi();
    setIsCircle(!isCircle);
  }

  return (
    <div className="App">
      {createPositions().map((singlePosition, index) => (
        <GameButton position={singlePosition.x} buttonClick={clickGameButton}
          player={isCircle} aiMove={aiMove} key={index} />))}
    </div>
  );
}

export default App;
