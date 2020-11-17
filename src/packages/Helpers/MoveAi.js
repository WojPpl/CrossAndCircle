const allPlaces = [
    {x: 0},
    {x: 1},
    {x: 2},
    {x: 3},
    {x: 4},
    {x: 5},
    {x: 6},
    {x: 7},
    {x: 8},
];
//const allPlaces = Array.from(Array(9).keys());
const makeAiMove = moves => {
    console.log("helper");
    console.log(moves);
    let takenPlaces = [];
    moves.forEach(move => {
        switch (move.positionX) {
            case 0: takenPlaces.push(0); break;
            case 1: takenPlaces.push(1); break;
            case 2: takenPlaces.push(2); break;
            case 3: takenPlaces.push(3); break;
            case 4: takenPlaces.push(4); break;
            case 5: takenPlaces.push(5); break;
            case 6: takenPlaces.push(6); break;
            case 7: takenPlaces.push(7); break;
            case 8: takenPlaces.push(8); break;
        }
    });

    console.log(takenPlaces);

    for (let i = 0; i < 9; i++) {
        if (!takenPlaces.includes(i)) {
            console.log(allPlaces[i - 1]);
            return allPlaces[i];
        }
    }
}

export default makeAiMove;
