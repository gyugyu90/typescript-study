let s1 = "hello";
let n1: typeof s;

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function f() {
    return { x: 10, y: 3 }
}

type P1 = ReturnType<typeof f>