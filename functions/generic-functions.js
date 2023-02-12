// return type is `any`
function firstElement(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
const s = firstElement2(["a", "b", "c"]); // return type is string
const n = firstElement([1, 2, 3]); // return type is number
const u = firstElement([]); // return type is undefined
