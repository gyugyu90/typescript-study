function printCoord(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a, _b;
    console.log("Hello ".concat(obj.first, " ").concat((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
    console.log((_b = obj.last) === null || _b === void 0 ? void 0 : _b.toUpperCase());
}
// both are OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Aliss" });
