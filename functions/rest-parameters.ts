function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3, 4);
console.log(a);