function doSomethingWithPair(pair) {
    const a = pair[0]; // ts knows it is string
    const b = pair[1];
    // ...
}
doSomethingWithPair(["hello", 42]);
function setCoordinate(coord) {
    const [x, y, z] = coord;
    console.log(`Provided coordinates had ${coord.length} dimensions`);
}
