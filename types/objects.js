function printCoord2(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printCoord2({ x: 3, y: 7 });
function printName(obj) {
    var _a;
    console.log("Hello ".concat(obj.first, " ").concat((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
// both are OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Aliss" });
