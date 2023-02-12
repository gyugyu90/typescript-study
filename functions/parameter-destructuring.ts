function sum({a, b, c}: {a: number, b: number, c: number}) {
    console.log(a + b + c);
}

sum({a: 10, b: 3, c: 9})

// rewrite with named type
type ABC = {a: number, b: number, c: number}
function sum2({a, b, c}: ABC) {
    console.log(a + b + c)
}

sum2({a: 10, b: 20, c: 33});