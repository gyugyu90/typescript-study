function printCoord(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    // do something
}
// both are OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Aliss" });
