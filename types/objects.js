function printCoord2(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord2({ x: 3, y: 7 });
function printName(obj) {
    console.log(`Hello ${obj.first} ${obj.last?.toUpperCase()}`);
}
// both are OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Aliss" });
