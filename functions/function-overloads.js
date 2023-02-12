function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// function implementation.. this is not shown from the outside
function fn2(x) {
    // ...
    console.log('this is 111' + x);
}
// Expected to be able to call with zero arguments
fn2();
fn2("hello");
