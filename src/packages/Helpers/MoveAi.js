//import checkWin from "./WinLines";
const huPlayer = "0";
const aiPlayer = "x";
const allPlaces = [
    { x: 0 },
    { x: 1 },
    { x: 2 },
    { x: 3 },
    { x: 4 },
    { x: 5 },
    { x: 6 },
    { x: 7 },
    { x: 8 },
]

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]


const checkFreePlaces = (takenPlaces) => {
    let freePlaces = [];
    for (let i = 0; i < 9; i++) {
        if (!takenPlaces.includes(i)) {
            freePlaces.push(i);
        }
    }
    return freePlaces;
}
const basicMoveAi = (moves) => {
    let takenPlaces = [];
    moves.forEach(move => { takenPlaces.push(move.position); });
    for (let i = 0; i < 9; i++) {
        if (!takenPlaces.includes(i)) return allPlaces[i];

    }
}

const fullBoardWithMoves = (moves) => {
    let fullBoard = Array.from(Array(9).keys());

    for (let i = 0; i < moves.length; i++) {
        fullBoard[moves[i].position] = moves[i].player;
    }
    return fullBoard;
}

const makeAiMove = (moves) => {
    let boardMoves = fullBoardWithMoves(moves);
    // let playerMoves = playersMoves.map(move => move.position).sort();
    // let freePlaces = checkFreePlaces(takenPlaces);
    let nextPositionAI = minimax(boardMoves, aiPlayer).index
    return { x: nextPositionAI };
}


const checkWin = (board, player) => {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = { index: index, player: player };
            break;
        }
    }
    return gameWon;
}

const emptyFields = (boardMoves) => {
    return boardMoves.filter(s => typeof s == 'number');
}


const minimax = (newBoard, player) => {
    var availSpots = emptyFields(newBoard);
    // var availSpots = checkFreePlaces(newBoard);

    if (checkWin(newBoard, huPlayer)) {
        return { score: -10 };
    } else if (checkWin(newBoard, aiPlayer)) {
        return { score: 10 };
    } else if (availSpots.length === 0) {
        return { score: 0 };
    }

    var moves = [];
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == aiPlayer) {
            var result = minimax(newBoard, huPlayer);
            move.score = result.score;
        } else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }
        newBoard[availSpots[i]] = move.index;
        moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
        var bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}
export default makeAiMove;
