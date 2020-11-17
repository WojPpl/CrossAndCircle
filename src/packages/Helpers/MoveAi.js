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
];
//const allPlaces = Array.from(Array(9).keys());
const makeAiMove = moves => {
    // console.log("helper");
    // console.log(moves);
    let takenPlaces = [];
    moves.forEach(move => { takenPlaces.push(move.position);});
    // console.log(takenPlaces);

    for (let i = 0; i < 9; i++) {
        if (!takenPlaces.includes(i)) {
            console.log(allPlaces[i - 1]);
            return allPlaces[i];
        }
    }
}

export default makeAiMove;
