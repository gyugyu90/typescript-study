// return type annotations
function getFavoriteNumber() {
    return 26;
}
// 일반 function이든 arrow function이든 type check이 잘 된다.
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(`arrow function: ${s}`);
});
