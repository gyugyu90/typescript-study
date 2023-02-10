// return type annotations
function getFavoriteNumber() {
    return 26;
}
// 일반 function이든 arrow function이든 type check이 잘 된다.
var names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log("arrow function: ".concat(s));
});
