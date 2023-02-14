function doSomethingWithPair(pair: [string, number]) {
    const a = pair[0]; // ts knows it is string
    const b = pair[1];
    // ...
}

doSomethingWithPair(["hello", 42]);

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;

    console.log(`Provided coordinates had ${coord.length} dimensions`);
}