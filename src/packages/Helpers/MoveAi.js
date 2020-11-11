const allPlaces = [
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 1, y: 2},
    {x: 2, y: 0},
    {x: 2, y: 1},
    {x: 2, y: 2},
];

const makeAiMove = moves => {
    console.log("helper");
    console.log(moves);
    let takenPlaces = [];
    moves.forEach(move => {
        switch (move.positionX) {
            case 0:
                if (move.positionY === 0) {
                    takenPlaces.push(1);
                }
                if (move.positionY === 1) {
                    takenPlaces.push(2);
                }
                if (move.positionY === 2) {
                    takenPlaces.push(3);
                }
                break;
            case 1:
                if (move.positionY === 0) {
                    takenPlaces.push(4);
                }
                if (move.positionY === 1) {
                    takenPlaces.push(5);
                }
                if (move.positionY === 2) {
                    takenPlaces.push(6);
                }
                break;
            case 2:
                if (move.positionY === 0) {
                    takenPlaces.push(7);
                }
                if (move.positionY === 1) {
                    takenPlaces.push(8);
                }
                if (move.positionY === 2) {
                    takenPlaces.push(9);
                }
                break;
        }
    });

    console.log(takenPlaces);

    for (let i = 1; i <= 9; i++) {
        if (!takenPlaces.includes(i)) {
            return allPlaces[i-1];
        }
    }

}

export default makeAiMove;
