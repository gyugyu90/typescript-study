// return type annotations
function getFavoriteNumber(): number { // number를 굳이 명시하지 않아도 타입 추론됨.
    return 26;
}

// 일반 function이든 arrow function이든 type check이 잘 된다.
const names = ["Alice", "Bob", "Eve"]
names.forEach(function (s) {
    console.log(s.toUpperCase())
})

names.forEach((s) => {
    console.log(`arrow function: ${s}`)
})