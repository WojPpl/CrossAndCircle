
const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
];

const checkWin = (playersMoves, gamer) => {
  let playerMoves = playersMoves.filter(move => move.player === gamer).map(move => move.position).sort();

  let gameWon = null;
  for (let [index, win] of winLines.entries()) {
    if (win.every(elem => playerMoves.indexOf(elem) > -1)) {
      gameWon = { index: index, player: gamer };
      break;
    }
  }
  return gameWon;
}
export default checkWin;
