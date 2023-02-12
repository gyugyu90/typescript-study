function longest<Type extends {length: number}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}
// length가 있는 object만 허용함


const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");