function printId(id) {
    console.log(`Your id is ${id}`);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });
function printId2(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
// number[]도 string도 slice()를 가지고 있음
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
